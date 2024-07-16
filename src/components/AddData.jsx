import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddData = ({ setData, data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    clientName: Yup.string().required("Client Name is required"),
    contactPerson: Yup.string().required("Contact Person is required"),
    applicantName: Yup.string().required("Applicant Name is required"),
    mark: Yup.string().required("Mark is required"),
    applicationNo: Yup.string().required("Application No. is required"),
    applicationFilingDate: Yup.string().required("Filing Date is required"),
    status: Yup.string().required("Status is required"),
    actionToBeTaken: Yup.string().required("Action is required"),
    deadline: Yup.string().required("Deadline is required"),
    diary: Yup.string().required("Diary is required"),
    actionByPNA: Yup.string().required("Action by PNA is required"),
  });

  // Initial form values
  const initialValues = {
    clientName: "",
    contactPerson: "",
    applicantName: "",
    mark: "",
    applicationNo: "",
    applicationFilingDate: "",
    status: "",
    actionToBeTaken: "",
    deadline: "",
    diary: "",
    actionByPNA: "",
  };

  // Form submission handler
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here

    console.log(values);
    setData((prevData) => [...prevData, values]);
    // You can perform your API calls or other actions here
    setSubmitting(false);
    handleOpen(); // Close the dialog after submission (or handle it as needed)
  };

  return (
    <>
      <Button className="flex gap-3" onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
        </svg>
        Add member
      </Button>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <CardBody className="flex w-full flex-col gap-4">
                  <Typography variant="h4" color="blue-gray">
                    Enter details to add member
                  </Typography>

                  <div className="flex w-full gap-4">
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Client Name
                      </Typography>
                      <Field
                        type="text"
                        name="clientName"
                        as={Input}
                        label="Client Name"
                        size="lg"
                      />
                      <ErrorMessage
                        name="clientName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Contact Person
                      </Typography>
                      <Field
                        type="text"
                        name="contactPerson"
                        as={Input}
                        label="Contact Person"
                        size="lg"
                      />
                      <ErrorMessage
                        name="contactPerson"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Applicant Name
                      </Typography>
                      <Field
                        type="text"
                        name="applicantName"
                        as={Input}
                        label="Applicant Name"
                        size="lg"
                      />
                      <ErrorMessage
                        name="applicantName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Mark
                      </Typography>
                      <Field
                        type="text"
                        name="mark"
                        as={Input}
                        label="Mark"
                        size="lg"
                      />
                      <ErrorMessage
                        name="mark"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Application No.
                      </Typography>
                      <Field
                        type="text"
                        name="applicationNo"
                        as={Input}
                        label="Application No."
                        size="lg"
                      />
                      <ErrorMessage
                        name="applicationNo"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Application Filing Date
                      </Typography>
                      <Field
                        type="text"
                        name="applicationFilingDate"
                        as={Input}
                        label="Application Filing Date"
                        size="lg"
                      />
                      <ErrorMessage
                        name="applicationFilingDate"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  <div className="flex w-full gap-4">
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Status
                      </Typography>
                      <Field
                        type="text"
                        name="status"
                        as={Input}
                        label="Status"
                        size="lg"
                      />
                      <ErrorMessage
                        name="status"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Action to be taken
                      </Typography>
                      <Field
                        type="text"
                        name="actionToBeTaken"
                        as={Input}
                        label="Action to be taken"
                        size="lg"
                      />
                      <ErrorMessage
                        name="actionToBeTaken"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Deadline
                      </Typography>
                      <Field
                        type="text"
                        name="deadline"
                        as={Input}
                        label="Deadline"
                        size="lg"
                      />
                      <ErrorMessage
                        name="deadline"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Diary
                      </Typography>
                      <Field
                        type="text"
                        name="diary"
                        as={Input}
                        label="Diary"
                        size="lg"
                      />
                      <ErrorMessage
                        name="diary"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <Typography className="-mb-2" variant="h6">
                        Action by PNA
                      </Typography>
                      <Field
                        type="text"
                        name="actionByPNA"
                        as={Input}
                        label="Action by PNA"
                        size="lg"
                      />
                      <ErrorMessage
                        name="actionByPNA"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  <CardFooter className="flex w-full max-w-[400px] gap-4 m-auto pt-0">
                    <Button
                      variant="gradient"
                      type="submit"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      Add member
                    </Button>
                    <Button
                    onClick={handleOpen}
                      variant="outlined"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      Cancle
                    </Button>
                  </CardFooter>
                </CardBody>
              </Form>
            )}
          </Formik>
        </Card>
      </Dialog>
    </>
  );
};

export default AddData;
