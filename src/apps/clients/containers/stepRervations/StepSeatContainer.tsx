import * as React from 'react';
import Container from '@mui/material/Container';
import { StepReservationContext} from "./context-reservations";
import SeatPassgerSelection from '../../components/SeatPassgerSelection';

export interface StepSeatContainerProps{

}

const StepSeatContainer:React.FC<StepSeatContainerProps> = (props) => {
    const { cars, journeySeats, passengers, trajets} = React.useContext(StepReservationContext);

    const handleSelectPassenger = React.useCallback((e:any)=>{        
        console.log("callback", e);
    },[]);

    console.log("cars///...........", cars)
    return (
        <div>
            <Container maxWidth="md">
                {cars && <SeatPassgerSelection
                    users = { passengers }
                    onSelectPlace = { handleSelectPassenger }
                    config = {{
                        trajets,
                        selectedTrajet:[0,trajets.length],
                        clipboard :cars.configCab.clipboard,
                        devMod: false,
                        x:cars.configCab.x,
                        y: cars.configCab.y,
                        reservations:{},
                        precomposition: cars.configCab.seats.edges?.map((seat:any)=>{
                           const {__typename, ...rest }  = seat.node;
                           return rest
                        })
                    }} 
                />}
            </Container>
        </div>
    )
}

export default StepSeatContainer;
