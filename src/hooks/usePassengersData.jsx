import jsonFile from './../data/passengers.json'

export const usePassengersData = () => {
    const getFareByAge = () => {
        const groupByAge = jsonFile.reduce((passengers, passenger) => {
            const age = Math.round(passenger.Age);

            if (!passengers[age]) {
                passengers[age] = {
                    Age: age,
                    Fare: 0,
                };
            }

            passengers[age].Fare += passenger.Fare;

            return passengers;
        }, {});

        return Object.values(groupByAge);
    }

    const getSurvivalsPerPClass = () => {
        const groupByPClass = jsonFile.reduce((passengers, passenger) => {
            const pClass = passenger.Pclass;
            const survival = passenger.Survived

            if (!passengers[pClass]) {
                passengers[pClass] = {
                    Pclass: pClass,
                    survivals: 0,
                };
            }

            if(survival) passengers[pClass].survivals++

            return passengers;
        }, {});

        return Object.values(groupByPClass);
    }

    return {
        getFareByAge,
        getSurvivalsPerPClass
    }
}
