import React, { useState, useEffect, useRef } from "react";
import classes from "./index.module.scss";
// import EmailImage from '/images/gamil_732200.png'

const index = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [mobile, setMobile] = useState("");
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    text: "",
    mobile: "",
  }); //all other form data

  const [successfullySubmit, setSuccessfullySubmit] = useState(false); //successfully form submit
  const [isInvalid, setIsInvalid] = useState({
    fNameIsInvalid: "",
    lNameIsInvalid: "",
    mobileIsInvalid: "",
    emailIsInvalid: "",
    // textIsInvalid: "",
  }); //hold error msg for each form feild

  /*-------------------------- Function/Logic -------------- */

  // handle Form Feild Change
  const handleFormFeildChange = (identifier, value) => {
    setFormData((prev) => {
      return { ...prev, [identifier]: value };
    }); // set form feild data to corresponding state key
  };

  //handle file uploaded by User
  // const handleFileUpload = (event) => {
  //   const fileInput = document.getElementById("resume__input");
  //   fileInput.style.visibility = "hidden"; // hide upload button
  //   fileName.current = event.target.files[0].name;
  //   setIsInvalid((prev) => ({
  //     ...prev,
  //     fileSizeIsInvalid: "",
  //   }));
  //   setResume(event.target.files[0]);
  // };

  // Handle Remove resume
  // const handleRemoveResume = () => {
  //   const fileInput = document.getElementById("resume__input");
  //   fileInput.style.visibility = "visible"; // active upload input feild
  //   fileName.current = "";
  //   setIsInvalid((prev) => ({
  //     ...prev,
  //     fileSizeIsInvalid: "",
  //   }));
  //   setResume(null);
  // };

  // handle blur chnage
  const handleBlurChange = (identifier, event) => {
    // setDidEdit((prev) => ({
    //   ...prev,
    //   [identifier]: true,
    // }));
  };

  //validate mobile number
  const validateNumberString = (inputString) => {
    //if the string is empty
    if (inputString === "") {
      return "Please enter a non-empty string.";
    }

    // Use a regular expression to check if the string contains only numbers
    var regex = /^[0-9]+$/;

    if (regex.test(inputString)) {
      // If the string contains only numbers
      return "";
    } else {
      // If the string contains non-numeric characters
      return "Please enter only numbers.";
    }
  };

  //check white-space and empty string
  const isTextValid = (text, validationFeild) => {
    const trimmedText = text.trim(); //remove all white space

    // check empty string for valid validationFeild
    if (trimmedText === "" && validationFeild != "") {
      return `${validationFeild} is missing`; //empty string
    }

    if (text !== trimmedText) {
      return `Space at start and end is not valid`; //trailing whitespace
    }
    return ""; //correct text
  };

  // validate email RFC 5322
  const validateEmail = (email) => {
    const emailRegex =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

    if (emailRegex.test(email)) {
      return "";
    }

    return "Invalid Email";
  };

  //validate resume select and size
  // const validateFileSize = () => {
  //   // if (resume.size > 3 * 1024 * 1024) {

  //   console.log(resume);
  //   if (!resume) {
  //     console.log("no resume found");
  //     return "Please Upload Resume";
  //   }
  //   if (resume.size > 3 * 1024 * 1024) {
  //     console.log(resume.size, "Exceed size from 5800Kb");
  //     return "File size exceeds 3MB";
  //   } else {
  //     // File size is within the limit
  //     console.log(resume.size, "less then size from 5800Kb");
  //     return "";
  //   }

  //   console.log("not run any if else ");
  // };

  // Handle Resume upload on AWS
  // const handleAWSUpload = async (id) => {
  //   if (resume) {
  //     try {
  //       // Initialize S3 client
  //       const s3 = new AWS.S3({
  //         accessKeyId: AWSKey.accessKeyId,
  //         secretAccessKey: AWSKey.secretAccessKey,
  //         region: AWSKey.region,
  //       });

  //       // Use a unique key
  //       const key = `instructor/resume/${id}_id-${resume.name}`;

  //       // Upload the file to S3
  //       const params = {
  //         Bucket: "oxzeracademy",
  //         Key: key,
  //         Body: resume,
  //         // ACL: "public-read", // Set ACL as needed
  //       };

  //       const awsData = await s3.upload(params).promise();
  //       return awsData;
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //       return error;
  //     }
  //   } else {
  //     console.warn("No file selected for upload");
  //   }

  //   console.log("going outside the AWS Function:..");
  // };

  // handle Form Submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    /* Validation Check For Each Feild */
    const fNameIsValid = isTextValid(formData.fName, "First Name");
    const lNameIsValid = isTextValid(formData.lName, "Last Name");
    // const textIsValid = isTextValid(formData.text, "text");
    const mobileIsValid = validateNumberString(formData.mobile);
    const emailIsValid = validateEmail(formData.email);

    const areAllValidFeild =
      fNameIsValid === "" &&
      lNameIsValid === "" &&
      // textIsValid === "" &&
      mobileIsValid === "" &&
      emailIsValid === ""; // check if all valid feilds

    if (areAllValidFeild) {
      // API CALL
      // try {
      //   // Execute the Become Instructor mutation
      //   const { data } = await becomeInstructorMutation({
      //     variables: {
      //       input: {
      //         fullName: formData.name,
      //         country: formData.country,
      //         countryCode: formData.countryCode,
      //         emailId: formData.email,
      //         linkedInURL: formData.linkedin,
      //         mobileNo: formData.number,
      //         youTubeChannelURL: formData.youtube,
      //         courseAppliedFor: formData.course,
      //       },
      //     },
      //   });

      //   const { createInstructorApplication } = data;

      //   const { applicationId, responseMessage } = createInstructorApplication;
      //   // console.log(
      //   //   "type of application id is ::..",
      //   //   typeof applicationId,
      //   //   applicationId,
      //   //   createInstructorApplication
      //   // );

      //   const { Bucket, Key, Location, key } = await handleAWSUpload(
      //     applicationId
      //   );

      //   const variables = {
      //     applicationId: applicationId,
      //     resumeUploadUrl: Location,
      //   };

      //   const { data: updateData } = await updateInstructorMutation({
      //     variables: variables,
      //   });
      // } catch (mutationError) {
      //   // Handle mutation errors
      //   console.error("Mutation error:", mutationError);
      // }

      setIsInvalid({
        fNameIsInvalid: "",
        lNameIsInvalid: "",
        mobileIsInvalid: "",
        emailIsInvalid: "",
        // textIsInvalid: "",
      });
    } else {
      setIsInvalid(() => ({
        fNameIsInvalid: fNameIsValid,
        lNameIsInvalid: lNameIsValid,
        mobileIsInvalid: mobileIsValid,
        emailIsInvalid: emailIsValid,
        // textIsInvalid: textIsValid,
      }));

      return;
    }

    setSuccessfullySubmit(true);
  };

  // useEffect(() => {
  //   const contactObserver = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setIsVisible(true);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // Adjust threshold as needed
  //   );

  //   contactObserver.observe(contactRef.current);

  //   return () => {
  //     contactObserver.disconnect();
  //   };
  // }, []);

  // const submitClickHandler = async (event) => {
  //   event.preventDefault();
  //   try {
  //     setFormIsSubmitting(true);
  //     // const response = await sendMail({
  //     //   name: `${fname} ${lname}`,
  //     //   email: email,
  //     //   text: text,
  //     //   product: product,
  //     // });

  //     const emailData = {
  //       name: `${fname} ${lname}`,
  //       email: email,
  //       text: text,
  //       mobile: mobile,
  //     };

  //     fetch("http://localhost:9000/sendmail", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(emailData),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.error("Error:", error));
  //     console.log("submit clicked");
  //     // setFname("");
  //     // setLname("");
  //     // setEmail("");
  //     // setText("");
  //     // setMobile("");
  //     if (response.status === 200) {
  //       setFormIsSubmitting(false);
  //       setFormSubmitted(true);
  //     }
  //     setTimeout(() => {
  //       setFormSubmitted(false);
  //     }, 2000);
  //   } catch (error) {
  //     setFormIsSubmitting(false);
  //     setFormError(true);
  //     setTimeout(() => {
  //       setFormError(false);
  //     }, 2000);
  //   }
  // };

  return (
    <section className={classes.contactus} id="mail">
      <div className={classes.div}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={classes.detail}>
            {/* <h1>Contact Us</h1>
          <h1>Get In Touch</h1>
          <p>With Our Expert</p> */}

            <p class={classes.component}>CONTACT US</p>
            <p class={classes.heading}>
              <span
                style={{
                  background: "linear-gradient(to right, #3A4DF5, #18BDE3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get In Touch With An Expert
                <br></br>
              </span>
              {/* with an Expert */}
            </p>

            <ul className={classes.list}>
              <li style={{ display: "flex", gap: "1.1rem" }}>
                <img src="/images/gmail.png" style={{ width: "2.5rem" }} />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className={classes.text}>sanrachna.co@gmail.com</p>
                </div>
              </li>

              <li style={{ display: "flex", gap: "1rem" }}>
                <img src="/images/phone.png" style={{ width: "2.5rem" }} />

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className={classes.text}>9005262627, 9810273848</p>
                </div>
              </li>

              <li style={{ display: "flex", gap: "1rem" }}>
                <img
                  src="/images/placeholder.png"
                  style={{ width: "2.5rem" }}
                />

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className={classes.text}>
                    Sikka Karmik Greens, Sector-78
                    <br></br>
                    Noida
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.formDiv}>
          <form className={classes.form} onSubmit={handleFormSubmit}>
            <div className={classes.row}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div className={classes.input__div}>
                  <label className={classes.label} htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className={classes.input}
                    type="text"
                    autoComplete="given-name"
                    name="firstName"
                    id="firstName"
                    // value={fname}
                    // onChange={fnameChangeHandler}
                    // placeholder="Enter your first name"
                    value={formData.fName}
                    onChange={(event) =>
                      handleFormFeildChange("fName", event.target.value)
                    }
                  />
                </div>
                {isInvalid.fNameIsInvalid != "" && (
                  <p className={classes.error}>{isInvalid.fNameIsInvalid}</p>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div className={classes.input__div}>
                  <label className={classes.label} htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className={classes.input}
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    // value={lname}
                    // onChange={lnameChangeHandler}
                    // required
                    // placeholder="Enter your last name"
                    value={formData.lName}
                    onChange={(event) =>
                      handleFormFeildChange("lName", event.target.value)
                    }
                  />
                </div>
                {isInvalid.lNameIsInvalid != "" && (
                  <p className={classes.error}>{isInvalid.lNameIsInvalid}</p>
                )}
              </div>
            </div>

            <div className={classes.row}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div className={classes.input__div}>
                  <label className={classes.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    className={classes.input}
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    // value={email}
                    // onChange={emailChangeHandler}
                    // placeholder="Enter your Email"
                    value={formData.email}
                    onChange={(event) =>
                      handleFormFeildChange("email", event.target.value)
                    }
                  />
                </div>

                {isInvalid.emailIsInvalid != "" && (
                  <p className={classes.error}>{isInvalid.emailIsInvalid}</p>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div className={classes.input__div}>
                  <label className={classes.label} htmlFor="">
                    Mobile
                  </label>

                  <input
                    className={classes.input}
                    type="text"
                    name="mobile"
                    id="mobile"
                    autoComplete="mobile"
                    // placeholder="Enter your contact number"
                    value={formData.mobile}
                    onChange={(event) =>
                      handleFormFeildChange("mobile", event.target.value)
                    }
                  />
                </div>

                {isInvalid.mobileIsInvalid != "" && (
                  <p className={classes.error}>{isInvalid.mobileIsInvalid}</p>
                )}
              </div>
            </div>

            <div className={classes.textarea}>
              <div className={classes.text__div}>
                <label className={classes.label} htmlFor="text">
                  Write to us
                </label>
                <textarea
                  className={classes.textarea__input}
                  rows="8"
                  cols="120"
                  id="text"
                  // onChange={textChangeHandler}
                  // value={text}
                  // required
                  // placeholder="Write your query"
                  value={formData.text}
                  onChange={(event) =>
                    handleFormFeildChange("text", event.target.value)
                  }
                  style={{ overflow: "hidden", height: "5rem" }}
                ></textarea>
                <div class={classes.submitButton}>
                  {/* <Button
                      // position={classes.button}
                      title="Submit"
                      onClick={submitClickHandler}
                    /> */}
                  <div
                    className={classes.button}
                    title="Submit"
                    onClick={handleFormSubmit}
                  >
                    <p className={classes.p}>SUBMIT</p>
                  </div>
                </div>
                {formIsSubmitting && <p>Form is Submitting</p>}
                {formSubmitted && <p>Form Submitted Successfully</p>}
                {formError && <p>Internal Server Error</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default index;
