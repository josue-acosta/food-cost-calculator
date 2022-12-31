import Link from "next/link";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import keys from "../../utils/keys";

import styles from "../../styles/Suppliers.module.scss";

export default function SupplerPage({ suppliers }) {
    return (
        <>
            <div className={styles.titleWrapper}>
                <h1>Suppliers List</h1>
                <Link href="/suppliers/add-supplier">
                    <Button variant="contained">+ Supplier</Button>
                </Link>
            </div>

            <div className={styles.suppliersGrid}>
                {suppliers.map((supplier) => (
                    <Card key={supplier.name}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={supplier.profile_picture}
                            alt={supplier.name}
                        />

                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {supplier.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Phone: {supplier.office_phone}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Address:
                                {` ${supplier.address_1}, ${supplier.address_2} `}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Link href={`/suppliers/${supplier._id}`}>
                                <Button>Supplies & Information</Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    const res = await fetch(`${keys.workingURL}/api/suppliers/supplier`);

    if (!res.ok) {
        throw new Error(`Error status: ${res.status}`);
    }

    const data = await res.json();

    return {
        props: {
            suppliers: data,
        },
    };
}
