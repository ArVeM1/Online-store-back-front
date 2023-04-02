import React, {useContext} from 'react';
import {ListGroup} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <ListGroup horizontal>
            {device.brands.map(brand =>
                <ListGroup.Item
                    key={brand.id}
                    style={{cursor: "pointer", padding: 20}}
                    onClick={() => device.setSelectedBrand(brand)}
                    active={brand.id === device.selectedBrand.id}
                >
                    {brand.name}
                </ListGroup.Item>
            )
            }
        </ListGroup>
    );
});

export default BrandBar;