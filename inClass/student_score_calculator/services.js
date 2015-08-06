var MyApp = angular.module('CustomServices', []);


MyApp.factory('Student', function(){

	var Student = function(name){
		this.name = name;
		this.assignments = [];
		this.totals = { 
			average: '',
			grade: 'A',
			passing: true
		};
	};

	Student.prototype.addScore = function(name, score){
		console.log(this.assignments);		
		this.assignments.push(angular.copy({assignmentName: name, score: score}));
		this.calculateTotals();
	}

	Student.prototype.calculateTotals = function(){
		var totalScore = 0;
		for (var i=0, n=this.assignments.length; i<n; i++){
			totalScore += parseInt(this.assignments[i].score);
		}
		var avg = (totalScore / n);
		this.totals.average = avg;
		this.totals.grade = avg < 56 ? 'F' : (avg < 66 ? 'D' : (avg < 76 ? 'C' : (avg < 86 ? 'B' : 'A')))
		this.totals.passing = avg > 55 ? true : false;
	}	

	return Student;
});