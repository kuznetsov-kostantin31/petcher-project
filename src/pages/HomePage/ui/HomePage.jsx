import React from 'react';
import PetHeader from "../../../widgets/header/ui/PetHeader";
import PetFooter from "../../../widgets/footer/ui/PetFooter";

const HomePage = () => {
    return (
        <div>
            <PetHeader/>
            <div className="homePage-content">
                <h1>HomePage</h1>
            </div>
            <PetFooter/>
        </div>
    );
};

export default HomePage;