let senators = require('./senators.json');

const party = senators.filter(party => party.party == 'republican', 'democrat', 'independent');

const state = senators.filter(state => state.state_name === 'Utah');

const gender = senators.filter(gender => gender.gender == 'male', 'female');

const simplify = state.map(state => {
    return {
        first_name:state.first_name,
        last_name:state.last_name,
        party:state.party,
        gender:state.gender,
    }
});

const senatorSenior = simplify.reduce((acc,cur) => acc);
console.log(senatorSenior)
