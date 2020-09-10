// Remove the entries of persons who have no passion in Computer Systems
const professionals = [{
        Name: 'Joy',
        Proficiency: 'Expert',
        Passion: true
    },
    {
        Name: 'James',
        Proficiency: 'Pro',
        Passion: false
    },
    {
        Name: 'Stella',
        Proficiency: 'Beginner',
        Passion: true
    },
    {
        Name: 'Will',
        Proficiency: 'Expert',
        Passion: false
    },
    {
        Name: 'Joe',
        Proficiency: 'Intermediate',
        Passion: true
    },

    {
        Name: 'Mike',
        Proficiency: 'Pro',
        Passion: false
    },
    {
        Name: 'Allan',
        Proficiency: 'Beginner',
        Passion: false
    },
    {
        Name: 'George',
        Proficiency: 'pro',
        Passion: true
    }
]

let modifiedEntries = professionals
    .filter(elem => elem.Passion)

console.log(modifiedEntries)

/*
output

All 'false' values are removed.

[
  { Name: 'Joy', Proficiency: 'Expert', Passion: true },
  { Name: 'Stella', Proficiency: 'Beginner', Passion: true },
  { Name: 'Joe', Proficiency: 'Intermediate', Passion: true },
  { Name: 'George', Proficiency: 'pro', Passion: true }
]

*/