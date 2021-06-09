import React, { useState } from "react";
// import { Menu } from "./Menu";

export const SchlerotiniaRiskCal = () => {
  const [formdata, setformdata] = useState({
    fieldName: "",
    firstName: "",
    lastName: "",
    date: "",
    rainfall: "",
    likelyhoodOfRain: "",
    plantDensity: "",
    hostCropYear: "",
    hostCropSeverarity: "",
    sclerotiniaGermination: "",
  });
  const {
    fieldName,
    firstName,
    lastName,
    date,
    rainfall,
    likelyhoodOfRain,
    plantDensity,
    hostCropSeverarity,
    hostCropYear,
    sclerotiniaGermination,
  } = formdata;
  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
    var value = { [e.target.name]: e.target.value };
    console.log(value);
    console.log(formdata);
    console.log("MY ID ", e.target.id);
  };
  const resetHandler = () => {
    setformdata({
      fieldName: "",
      firstName: "",
      lastName: "",
      date: "",
      rainfall: "",
      likelyhoodOfRain: "",
      plantDensity: "",
      hostCropYear: "",
      hostCropSeverarity: "",
      sclerotiniaGermination: "",
    });
    if (document.querySelector('input[name="rainfall"]:checked'))
      document.querySelector('input[name="rainfall"]:checked').checked = false;
    if (document.querySelector('input[name="likelyhoodOfRain"]:checked'))
      document.querySelector(
        'input[name="likelyhoodOfRain"]:checked'
      ).checked = false;
    if (document.querySelector('input[name="plantDensity"]:checked'))
      document.querySelector(
        'input[name="plantDensity"]:checked'
      ).checked = false;
    if (document.querySelector('input[name="hostCropYear"]:checked'))
      document.querySelector(
        'input[name="hostCropYear"]:checked'
      ).checked = false;
    if (document.querySelector('input[name="hostCropSeverarity"]:checked'))
      document.querySelector(
        'input[name="hostCropSeverarity"]:checked'
      ).checked = false;
    if (document.querySelector('input[name="sclerotiniaGermination"]:checked'))
      document.querySelector(
        'input[name="sclerotiniaGermination"]:checked'
      ).checked = false;
    // console.log(formdata);
  };
  // const saveHandler = () => {
  //   const data = [
  //     {
  //       fieldName: { fieldName },
  //       firstName: firstName,
  //       lastName: lastName,
  //       date: date,
  //     },
  //   ];
  //   exportToCSV(data, "");
  // };

  let total =
    Number(rainfall) +
    Number(likelyhoodOfRain) +
    Number(plantDensity) +
    Number(hostCropSeverarity) +
    Number(hostCropYear) +
    Number(sclerotiniaGermination);
  // console.log("total:" + total);

  const recommend = () => {
    let unknownRisk = 0;
    if (document.querySelector('input[id="Unknown1"]:checked')) unknownRisk++;
    if (document.querySelector('input[id="Unknown2"]:checked')) unknownRisk++;
    if (document.querySelector('input[id="Unknown3"]:checked')) unknownRisk++;
    if (document.querySelector('input[id="Unknown4"]:checked')) unknownRisk++;
    // console.log(unknownRisk);
    if (unknownRisk === 0) {
      if (total >= 0 && total <= 35)
        return "A funcide application is not recommended";
      else return "A fungicide application is recommended";
    } else if (unknownRisk === 1 || unknownRisk === 2) {
      if (total >= 0 && total <= 20)
        return "A funcide application is not recommended";
      else if (total > 20 && total <= 45) {
        return "A fungicide recommendation cannot be made because one or two unknown risk values and a total risk score close to the threshold.";
      } else return "A fungicide application is recommended";
    } else {
      return "A fungicide recommendation cannot be made because of three or four unknown risk values.";
    }
  };

  return (
    <div>
      <h1>Sclerotinia Risk Assessment </h1>
      <form>
        <label>
          Field name
          <input
            type="text"
            name="fieldName"
            placeholder="Enter Field Identifier"
            value={fieldName}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          First name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <label>
          Date
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <div className="radio-select">
          <h3>Rainfall in last 14 days</h3>
          <label>
            less than 10 mm = 0 Risk point
            <input
              type="radio"
              id="Less than 10mm"
              name="rainfall"
              value="0"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            10-30 mm = 5 Risk point
            <input
              type="radio"
              id="10 -30 mm"
              name="rainfall"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            More than 30 mm = 10 Risk point
            <input
              type="radio"
              id="More than 30mm"
              name="rainfall"
              value="10"
              onChange={handleChange}
            ></input>
          </label>
          <input type="text" value={rainfall}></input>
          <h3>Likelyhood of rain in 3 day weather forecast</h3>
          <label>
            0 – 29% = 0 Risk point
            <input
              type="radio"
              id="0 – 29%"
              name="likelyhoodOfRain"
              value="0"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            30 -59% = 5 Risk point
            <input
              type="radio"
              id="30 -59%"
              name="likelyhoodOfRain"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            60 -100% = 10 Risk point
            <input
              type="radio"
              id="60 -100%"
              name="likelyhoodOfRain"
              value="10"
              onChange={handleChange}
            ></input>
          </label>
          <input type="text" value={likelyhoodOfRain} />
          <h3>Plant Density</h3>
          <label>
            Unkown = 5 Risk points
            <input
              type="radio"
              id="Unknown1"
              name="plantDensity"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            Low 40-70 plants/m2 = 0 Risk points
            <input
              type="radio"
              id="Low 40-70"
              name="plantDensity"
              value="0"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            Normal, 70 – 110 m2 = 5 Risk points
            <input
              type="radio"
              id="Normal, 70 – 110 m2"
              name="plantDensity"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            High, 110 - 140 m2 = 10 Risk points
            <input
              type="radio"
              id="High, 110 - 140  m2"
              name="plantDensity"
              value="10"
              onChange={handleChange}
            ></input>
          </label>
          <input type="text" value={plantDensity} />
          <h3>Year since last host crop </h3>
          <label>
            Unkown = 5 Risk points
            <input
              type="radio"
              id="Unknown2"
              name="hostCropYear"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            More than 6 years = 0 Risk points
            <input
              type="radio"
              id="More than 6 years"
              name="hostCropYear"
              value="0"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            Between 3 – 6 years = 5 Risk points
            <input
              type="radio"
              id="Between 3 – 6 years"
              name="hostCropYear"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            Between 1 – 2 years = 10 Risk points
            <input
              type="radio"
              id="Between 1 – 2 years"
              name="hostCropYear"
              value="10"
              onChange={handleChange}
            ></input>
          </label>
          <input type="text" value={hostCropYear} />
          <h3>Sclerotinia severarity in last host corp</h3>
          <label>
            Unkown = 5 Risk points
            <input
              type="radio"
              id="Unknown3"
              name="hostCropSeverarity"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            No disease = 0 Risk points
            <input
              type="radio"
              id="No disease"
              name="hostCropSeverarity"
              value="0"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            Low 1 – 10% infected steams = 5 Risk points
            <input
              type="radio"
              id="Low 1 – 10% infected steams"
              name="hostCropSeverarity"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            Moderate, 11 – 30% infected steam = 10 Risk points
            <input
              type="radio"
              id="Moderate, 11 – 30% infected steam"
              name="hostCropSeverarity"
              value="10"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            High above 30% infected steams = 15 Risk points
            <input
              type="radio"
              id="High above 30% infected steams"
              name="hostCropSeverarity"
              value="15"
              onChange={handleChange}
            ></input>
          </label>
          <input type="text" value={hostCropSeverarity} />
          <h3>Estimation of sclerotinia germination</h3>
          <p>Scouting for apothecia in the field</p>
          <label>
            Unkown = 5 Risk points
            <input
              type="radio"
              id="Unknown4"
              name="sclerotiniaGermination"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            No apothecia = 0 Risk points
            <input
              type="radio"
              id="No apothecia"
              name="sclerotiniaGermination"
              value="0"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            A few apothecia = 5 Risk points
            <input
              type="radio"
              id="A few apothecia"
              name="sclerotiniaGermination"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            Apothecia are easy to find = 10 Risk points
            <input
              type="radio"
              id="Apothecia are easy to find"
              name="sclerotiniaGermination"
              value="10"
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            Apothecia are abundant = 15 Risk points
            <input
              type="radio"
              id="Apothecia are abundant"
              name="sclerotiniaGermination"
              value="5"
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <input type="text" value={sclerotiniaGermination} />
        <br />
        <h1>Total Risk Points</h1>
        <input
          type="text"
          value={total}
          //value={Number(rainfall) + Number(likelyhoodOfRain) + Number(plantDensity) + Number(hostCropSeverarity) + Number(hostCropYear) + Number(sclerotiniaGermination)}
        />
      </form>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={recommend}>Recommendation</button>

      {/* <button onClick={saveHandler}>Save</button> */}
    </div>
  );
};
