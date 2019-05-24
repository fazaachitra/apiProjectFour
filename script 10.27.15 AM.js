myApp = {};

myApp.key = 'a91fee1758c5c0c609f0db4a9ef6b8d933bdfbae';

myApp.dataArray = [
    // {name: `Afghanistan`,
    // code: `af`,
    // states: [
    //     `Badakhshan`, `Badghis`, `Baghlan`, `Balkh`, `Bamian`, `Daykondi`, `Farah`, `Faryab`, `Ghazni`, `Ghowr`, `Helmand`, `Herat`, `Jowzjan`, `Kabul`, `Kandahar`, `Kapisa`, `Khost`, `Konar`, `Kondoz`, `Laghman`, `Lowgar`, `Nangarhar`, `Nimruz`, `Nurestan`, `Oruzgan`, `Paktia`, `Paktika`, `Panjshir`, `Parvan`, `Samangan`, `Sar - e Pol`, `Takhar`, `Vardak`, `Zabol`]
    // },
    { 
        name: `Canada`,
        code: `ca`,
        states:
            {
            stateName: `Alberta`, 
            stateCode: `ca-ab`
            },
            // {stateName: `Ontario`, stateCode: `ca-on`},
    },

    {
        name: `United States`,
        code: `us`,
    }
]

// ****we want to get this info before the submit - how do we capture it for the select dropdown AND the submit??****
// const chosenCountry = function(){
//     $(`#country option:selected`).val();
// } 


countriesArray = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Rep',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo Democratic Republic',
    'Cook Islands',
    'Costa Rica',
    'Cote d\'Ivoire',
    'Croatia',
    'Cuba',
    'Curacao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kosovo',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Helena',
    'Saint Kitts & Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre and Miquelon',
    'Saint Vincent & the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome & Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'St. Barts',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad & Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'US Virgin Islands',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Wallis and Futuna',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

$(document).ready(() => {
    $('#country').on('change', function () {
        myApp.findAllStates(countryName);
    })

    myApp.findAllStates = function() {
        myApp.currentCountry = myApp.dataArray.filter(function(country) {
            return country.code === countryName
        }) 
    }

    myApp.currentStates = myApp.currentCountry.states
    myApp.populateStates(myApp.currentStates)

    // stateList.map(state => {
    //     return (<option id = {state.stateCode
    //     }
    //                     class = "state-item" > {
    //                         state.stateName
    //                     } <
    //                     /option>


    // // const chosenCountry = $(`#country option:selected`).val();

    // // listening to the user's input
    // $('.submit').on('click', function () {
    //     //capturing the value of the country the user selected
    //     chosenCountry = $(`#country option:selected`).val();
    //     console.log(chosenCountry)
        
    //     // using the country value selected to call the list of associated states
    //     // const chosenState = $(.selectState) ${chosenCountry.states}

    // myApp.getHolidays(chosenCountry); 

    // })

    myApp.getHolidays = function (chosenCountry) {
        console.log('fired')
        $.ajax({
            url: `https://calendarific.com/api/v2/holidays`,
            method: `GET`,
            dataType: `json`,
            
            data: {
                api_key: myApp.key,
                country: chosenCountry,
                year: 2019,
                day: 20,
                month: 05,
                location: 'ca-on',
            },
            // location: myApp.dataArray[0].states.stateCode,
        }).then(function (results) {
            console.log(results, 'results');
        }).catch((error) => {
            console.log('error!!!');
        })
    }

})

    // logic we’ ll use to display the output(pseudocode)

    // if the holidays API response is empty, add‘ YES(they are working)’ to the html

    // if the holiday response is NOT empty, add‘ NO, it’ s[the name of the holiday] !’

    // if ($() === ("") {
    //         $("p.output").text("Yes, they're working")
    //     } else {
    //         $("p.output").text("No, it's ${`holidays.name`}, they're off");
    //     }
