import { useRouter } from "next/router";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import keys from "../../utils/keys";

// formik-mui
import { TextField } from "formik-material-ui";

// mui
import {
    Button,
    Card,
    CardContent,
    CardActions,
    Typography,
    Grid,
} from "@mui/material";

const postForm = async (body) => {
    const response = await fetch(`${keys.workingURL}/api/suppliers/supplier`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(body),
    });

    console.log(body);

    return response.json();
};

export default function AddSupplierPage() {
    const router = useRouter();

    return (
        <Formik
            initialValues={{
                profile_picture: "",
                name: "",
                address_1: "",
                address_2: "",
                office_phone: "",
                public_website: "",
                order_portal: "",
                payment_portal: "",
                sales_rep: "",
                sales_email: "",
                sales_phone: "",
                accounting_rep: "",
                accounting_email: "",
                accounting_phone: "",
                notes: "",
            }}
            validationSchema={Yup.object({
                profile_picture: Yup.string().required("Required"),

                name: Yup.string().required("Required"),
                address_1: Yup.string().required("Required"),
                address_2: Yup.string().required("Required"),
                office_phone: Yup.string().required("Required"),

                public_website: Yup.string(),
                order_portal: Yup.string(),
                payment_portal: Yup.string(),

                sales_rep: Yup.string(),
                sales_email: Yup.string(),
                sales_phone: Yup.string(),
                accounting_rep: Yup.string(),
                accounting_email: Yup.string(),
                accounting_phone: Yup.string(),
                notes: Yup.string(),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                postForm(values);
                resetForm();
                setSubmitting(false);
            }}
        >
            {(formik) => (
                <Card>
                    <Form onSubmit={formik.handleSubmit}>
                        <CardContent>
                            <Grid container spacing={2} p={2}>
                                <Grid item xs={6}>
                                    <Field
                                        label="Name"
                                        name="name"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        label="Phone"
                                        name="office_phone"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={2}
                                p={2}
                                alignItems="flex-end"
                            >
                                <Grid item xs={6}>
                                    <Field
                                        label="Street Name"
                                        name="address_1"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        label="City, State, Zip"
                                        name="address_2"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={2}
                                p={2}
                                alignItems="flex-end"
                            >
                                <Grid item xs={12}>
                                    <Field
                                        label="Website"
                                        name="public_website"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        label="Ordering Portal"
                                        name="order_portal"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        label="Payment Portal"
                                        name="payment_portal"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={2}
                                p={2}
                                alignItems="flex-end"
                            >
                                <Grid item xs={6}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ marginTop: "1rem" }}
                                    >
                                        Sales Representative
                                    </Typography>
                                    <Field
                                        label="Name"
                                        name="sales_rep"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ marginTop: "1rem" }}
                                    >
                                        Accounting Representative
                                    </Typography>
                                    <Field
                                        label="Name"
                                        name="accounting_rep"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={2}
                                p={2}
                                alignItems="flex-end"
                            >
                                <Grid item xs={6}>
                                    <Field
                                        label="Email"
                                        name="sales_email"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        label="Email"
                                        name="accounting_email"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={2}
                                p={2}
                                alignItems="flex-end"
                            >
                                <Grid item xs={6}>
                                    <Field
                                        label="Phone"
                                        name="sales_phone"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        label="Phone"
                                        name="accounting_phone"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={2}
                                p={2}
                                alignItems="flex-end"
                            >
                                <Grid item xs={12}>
                                    <Field
                                        label="Notes"
                                        name="notes"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={2}
                                p={2}
                                alignItems="flex-end"
                            >
                                <Grid item xs={12}>
                                    <Field
                                        label="Profile Picture URL"
                                        name="profile_picture"
                                        type="text"
                                        fullWidth
                                        component={TextField}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>

                        <CardActions
                            sx={{
                                padding: "0 2rem 2rem 0",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Button
                                onClick={() => {
                                    formik.resetForm();
                                    router.back();
                                }}
                            >
                                Back
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={formik.isSubmitting}
                            >
                                Submit
                            </Button>
                        </CardActions>
                    </Form>
                </Card>
            )}
        </Formik>
    );
}
