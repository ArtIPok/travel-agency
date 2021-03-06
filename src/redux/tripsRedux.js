/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  const durationFilter = (filters, output) => {
    const duration = (trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
    
    output = output.filter(duration);

    return output;
  };

  // TODO - filter by tags
  const tagsFilter = (filters, output) => {
    if (filters.tags.length) {
      for (let tag of filters.tags) {
        const tagIndex = (trip => trip.tags.indexOf(tag) >= 0);
        output = output.filter(tagIndex);
      }
    }
    return output;
  };

  output = durationFilter(filters, output);
  output = tagsFilter(filters, output);

  // TODO - sort by cost descendia``1 `ng (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter((trip) => trip.id == tripId);

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter((trip) => trip.country.code == countryCode);

  // TODO - filter trips by countryCode


  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};
/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
