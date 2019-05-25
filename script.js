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
        states: [
            {
            stateName: `Alberta`, 
            stateCode: `ca-ab`
            },
            {stateName: `Ontario`, 
            stateCode: `ca-on`
            }]
    },

    {
        name: `United States`,
        code: `us`,
    }
]

// ****we want to get this info before the submit - how do we capture it for the select dropdown AND the submit??****

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
        chosenCountry = $(`#country option:selected`).val();
        console.log(chosenCountry)

        // myApp.findAllStates(chosenCountry);

        if ((chosenCountry) === 'ca') {
            $('#CaStateForm').removeClass('displayNone');
            $('#CaStateForm').addClass('display');
        } else if ((chosenCountry) === 'us') {
            $('#USStateForm').removeClass('displayNone');
            $('#USStateForm').addClass('display');
        }

    })

    // myApp.findAllStates = function(countryCode) {
    //     myApp.chosenCountry = myApp.dataArray.filter(function(country) {
    //         return country.code === countryCode;
    //     }) 

        // console.log(myApp.chosenCountry[0]);

        // const countryObject = myApp.chosenCountry[0];
        // console.log(countryObject.states[0].stateName);

        // countryObject.states.forEach(function(item) {
        //     console.log(item.stateName);
        // })

        // myApp.currentStates = myApp.chosenCountry.forEach(item => {
        //     return item[0].states[0].stateCode === stateCode;
        // })

        // console.log(myApp.currentStates);

        // myApp.populateStates(myApp.currentStates);
        
        // console.log(myApp.chosenCountry.states);

    // }

    // myApp.currentStates.forEach(state => {
    //     return (<option value= {states.stateCode} class="state-item" {states.stateName} </option>)
    // }

    // const chosenCountry = $(`#country option:selected`).val();
    
    // listening to the user's input
    $('.submit').on('click', function () {
        //capturing the value of the country the user selected
        const chosenCountry = $(`#country option:selected`).val();
        console.log(chosenCountry);
        const chosenState = $(`#state option:selected`).val();
        console.log(chosenState);
        const today = new Date();
        const currentDate = today.getDate();
        const currentMonth = today.getMonth()+1;
        const currentYear = today.getFullYear();
        const currentDayOfWeek = today.getDay();
        const currentHours = today.getHours();
        console.log(currentDate, currentMonth, currentYear);

        // using the country value selected to call the list of associated states
        // const chosenState = $(.selectState) ${chosenCountry.states}

        // myApp.getHolidays(chosenCountry); 

        myApp.getHolidays = (chosenCountry, chosenState) => {
            console.log('fired');
            $.ajax({
                url: `https://calendarific.com/api/v2/holidays`,
                method: `GET`,
                dataType: `json`,
                data: {
                    api_key: myApp.key,
                    country: chosenCountry,
                    year: currentYear,
                    day: currentDate,
                    month: currentMonth,
                    location: chosenState,
                    type: 'national'
                },
                // location: myApp.dataArray[0].states.stateCode,
            }).then(function (results) {
                console.log(results, 'results');
                const currentHoliday = (results.response.holidays);
                console.log('currentHoliday');
                if (currentHoliday.length === 0 && currentDayOfWeek !== 6 && currentDayOfWeek !== 0) {
                    console.log(`they are working - no holiday and weekday`);
                    $('h2').text('There is NO holiday!')
                } else if (currentHoliday.length === 0 && currentDayOfWeek !== 1 && currentDayOfWeek !== 2 && currentDayOfWeek !== 3 && currentDayOfWeek !== 4 && currentDayOfWeek !== 5) {
                    console.log(`theres no holiday but it IS a weekend`);
                    $('h2').text(`It's the weekend!`)
                } else {
                    console.log(`theres a holiday`);
                    $('h2').text(`It is ${currentHoliday[0].name}!`);
                }
            }).catch((error) => {
                console.log('error!!!');
            })
        }

        // const currentHoliday = results.response.holidays[0];
        // console.log(currentHoliday, 'this is the current holiday');

        myApp.getHolidays(chosenCountry, chosenState);

        // const printOutput = function () {
        //     $('h2').text(`There's a holiday`);
        // }

        // const printOutputYes = function () {
        //     $('h2').text('Yes');
        // }

        // myApp.NameToChangeTBD = function(){
        //     if (currentHoliday === true) {
        //         console.log('THERES A HOLIDAY');
        //         printOutput();
        //     } else {
        //         console.log('THERES NO HOLIDAY!!');
        //         printOutputYes();
        //     }
        // }

        // myApp.NameToChangeTBD();

        

        // myApp.printOutput = myApp.getHolidays.forEach(item => {
        //     return item[0].states[0].stateCode === stateCode;
        // })
    
        })
    })

    // logic we’ ll use to display the output(pseudocode)

    // if the holidays API response is empty, add‘ YES(they are working)’ to the html

    // if the holiday response is NOT empty, add‘ NO, it’ s[the name of the holiday] !’

    // if ($() === ("") {
    //         $("p.output").text("Yes, they're working")
    //     } else {
    //         $("p.output").text("No, it's ${`holidays.name`}, they're off");
    //     }
