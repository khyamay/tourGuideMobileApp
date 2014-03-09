app.adapters.building = (function(){
	
	var findById = function(id){
		var def = $.Deferred(),
		building = null;
		len = buildings.length;

		for (var i = 0; i < len; i++){
			if(buildings[i].id === id){
				building = buildings[i];
				break;
			}
		}
		def.resolve(building);
		return def.promise();
	},

	findByName = function(searchKey){
		var def = $.Deferred();;
		var results = buildings.filter(function(el){
			var buildingName = el.buildingName;
			return buildingName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;

		});

		def.resolve(results);
		return def.promise();
	},


	buildings = [
					{
			  "id": 1,
			  "buildingName": "Anglesea Building",
			  "department": "School of Engineering",
			  "telePhone": "+44 (0) 23 9284 2929",
			  "email": "hos.eng@port.ac.uk",
			  "address": "Anglesea Road, Portsmouth, PO1 3DJ"
			},
			{
			  "id": 2,
			  "buildingName": "Buckingham Building",
			  "department": "School of Computing",
			  "telePhone": "+44 (0)23 9284 2504",
			  "email": "geography@port.ac.uk",
			  "address": "Lion Terrace, Portsmouth, PO1 3HE"
			},
			{
			  "id": 3,
			  "buildingName": "Burnaby Building",
			  "department": "School of Earth and Environmental Sciences",
			  "telePhone": "+44 (0)23 9284 2257",
			  "email": "sees.enquiries@port.ac.uk",
			  "address": "Burnaby Road, Portsmouth , PO1 3QL"
			},
			{
			  "id": 4,
			  "buildingName": "Dennis Sciama Building",
			  "department": "Institute of Cosmology and Gravitation",
			  "telePhone": "+44 (0)23 9284 2257",
			  "email": "sees.enquiries@port.ac.uk",
			  "address": "Burnaby Road, Portsmouth, PO1 3FX"
			},
			{
			  "id": 5,
			  "buildingName": "Eldon Building",
			  "department": "Portsmouth School of Architecture",
			  "telePhone": "+44 (0) 23 9284 2929",
			  "email": "architecture@port.ac.uk",
			  "address": "Winston Churchill Avenue, Portsmouth, PO1 2DJ"
			},
			{
			  "id": 6,
			  "buildingName": "Hampshire Terrace",
			  "department": "Institute of Industrial Research",
			  "telePhone": "+44 (0) 23 9284 4448",
			  "email": "iir@port.ac.uk",
			  "address": "1-2 Hampshire Terrace, Portsmouth, PO1 2QF"
			},
			{
			  "id": 7,
			  "buildingName": "James Watson West",
			  "department": "School of Health Sciences and Social Work",
			  "telePhone": "+44 (0)23 9284 4440",
			  "email": "shssw@port.ac.uk",
			  "address": "2 King Richard 1st Road, Portsmouth, PO1 2FR"
			},
			{
			  "id": 8,
			  "buildingName": "King Henry Building",
			  "department": "Department of Psychology",
			  "telePhone": "+44 (0)23 9284 6312",
			  "email": "psychology@port.ac.uk",
			  "address": "King Henry I Street, Portsmouth, PO1 2DY"
			},
			{
			  "id": 9,
			  "buildingName": "Lion Gate Building",
			  "department": "Department of Mathematics",
			  "telePhone": "+44 (0) 23 9284 6367",
			  "email": "maths@port.ac.uk",
			  "address": "Lion Terrace, Portsmouth, PO1 3HF"
			},
			{
			  "id": 10,
			  "buildingName": "Milldam Building",
			  "department": "School of Social, Historical and Literary Studies",
			  "telePhone": "+44 (0)23 9284 6036",
			  "email": "sshls@port.ac.uk",
			  "address": "Burnaby Road, Portsmouth, PO1 3AS"
			},
			{
			  "id": 11,
			  "buildingName": "Park Building",
			  "department": "Faculty of Humanities and Social Sciences",
			  "telePhone": "+44 (0)23 9284 6014",
			  "email": "iir@port.ac.uk",
			  "address": "King Henry I Street, Portsmouth, PO1 2DZ"
			},
			{
			  "id": 12,
			  "buildingName": "Portland Building",
			  "department": "Faculty of Technology",
			  "telePhone": "+44 (0) 23 9284 2011",
			  "email": "technology@port.ac.uk",
			  "address": "Portland Street, Portsmouth, PO1 3AH"
			},
			{
			  "id": 13,
			  "buildingName": "Purple Door",
			  "department": "Purple Door Careers and Recruitment",
			  "telePhone": "+44 (0)23 9284 2684",
			  "email": "careersandrecruitment@port.ac.uk",
			  "address": "28 Guildhall Walk, Portsmouth, PO1 2DD"
			},
			{
			  "id": 14,
			  "buildingName": "Ravelin House",
			  "department": "Institute of Criminal Justice Studies",
			  "telePhone": "+44 (0)23 9284 3933",
			  "email": "icjsonlinehelp@port.ac.uk",
			  "address": "Museum Road Portsmouth, PO1 2QQ"
			},
			{
			  "id": 15,
			  "buildingName": "Richmond Building",
			  "department": "Portsmouth Business School",
			  "telePhone": "+44 (0)23 9284 4600",
			  "email": "pbs.enquiries@port.ac.uk",
			  "address": "APortland Street, Portsmouth, PO1 3DE"
			},
			{
			  "id": 16,
			  "buildingName": "Spinnaker Building",
			  "department": "Department of Sport and Exercise Science",
			  "telePhone": "+44 (0)23 9284 5163",
			  "email": "sports.science@port.ac.uk",
			  "address": "Cambridge Road, Portsmouth, PO1 2ER"
			},
			{
			  "id": 17,
			  "buildingName": "St. Andrew's Court",
			  "department": "Graduate School",
			  "telePhone": "+44 (0))23 9284 2984",
			  "email": "graduateschool@port.ac.uk",
			  "address": "St. Michael's Road, Portsmouth, PO1 2PR"
			},
			{
			  "id": 18,
			  "buildingName": "St. George's Building",
			  "department": "School of Education and Continuing Studies",
			  "telePhone": "+44 (0)23 9284 5204",
			  "email": "ssecs.enquiries@port.ac.uk",
			  "address": "141 High Street, Portsmouth, PO1 2HY"
			},
			{
			  "id": 19,
			  "buildingName": "St. Michael's Building",
			  "department": "Faculty of Science",
			  "telePhone": "+44 (0)23 9284 2994",
			  "email": "sci.admissions@port.ac.uk",
			  "address": "White Swan Road, Portsmouth, PO1 2DT"
			},
			{
			  "id": 20,
			  "buildingName": "University Library",
			  "department": "University Library",
			  "telePhone": "+44 (0)23 9284 3228",
			  "email": "elibrary@port.ac.uk",
			  "address": "Cambridge Road, Portsmouth, P01 2ST"
			},
			{
			  "id": 21,
			  "buildingName": "William Beatty Building",
			  "department": "Dental Academy",
			  "telePhone": "+44 (0) 23 9284 8484 ",
			  "email": "info.centre@port.ac.uk",
			  "address": "Hampshire Terrace, Portsmouth, PO1 2QG"
			},
			{
			  "id": 22,
			  "buildingName": "Wiltshire Building",
			  "department": "University of Portsmouth",
			  "telePhone": "+44 (0)23 9284 6312",
			  "email": "psychology@port.ac.uk",
			  "address": "Hampshire Terrace, Portsmouth, PO1 2EG"
			},
			{
			  "id": 23,
			  "buildingName": "Lion Gate Building",
			  "department": "Department of Mathematics",
			  "telePhone": "+44 (0) 23 9284 6367",
			  "email": "maths@port.ac.uk",
			  "address": "Lion Terrace, Portsmouth, PO1 3HF"
			}

		];

		return {
			findById: findById,
			findByName: findByName
		};
}());