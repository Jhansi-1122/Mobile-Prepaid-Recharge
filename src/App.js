import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import MobileNumberInput from './Components/MobileNumberInput';
import RechargePlans from './Components/RechargePlans';
import Payment from './Components/Payment';
import Confirmation from './Components/Confirmation';

function App() {
    return (
        <Router>
        <Routes>
            <Route exact path="/" element={<MobileNumberInput />} />
            <Route path="/plans" element={<RechargePlans />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
            </Router>
    );
}

export default App;
