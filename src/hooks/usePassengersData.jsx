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

    return {
        getFareByAge
    }
}
