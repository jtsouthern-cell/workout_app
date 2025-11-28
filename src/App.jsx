import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Activity, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronUp, 
  RotateCcw,
  Trophy,
  Flame,
  Moon
} from 'lucide-react';

const defaultSchedule = [
  {
    id: 'mon',
    day: 'Monday',
    focus: 'Upper Body Strength',
    icon: 'strength',
    color: 'bg-blue-500',
    exercises: [
      { name: 'Bench Press', sets: '3 sets', reps: '8-10 reps', completed: false },
      { name: 'Bent Over Rows', sets: '3 sets', reps: '8-10 reps', completed: false },
      { name: 'Overhead Press', sets: '3 sets', reps: '10-12 reps', completed: false },
      { name: 'Pull-ups (or Lat Pulldowns)', sets: '3 sets', reps: 'AMRAP', completed: false },
      { name: 'Dumbbell Bicep Curls', sets: '3 sets', reps: '12-15 reps', completed: false },
    ]
  },
  {
    id: 'tue',
    day: 'Tuesday',
    focus: 'Lower Body Strength',
    icon: 'legs',
    color: 'bg-emerald-500',
    exercises: [
      { name: 'Barbell Squats', sets: '3 sets', reps: '6-8 reps', completed: false },
      { name: 'Romanian Deadlifts', sets: '3 sets', reps: '8-10 reps', completed: false },
      { name: 'Walking Lunges', sets: '3 sets', reps: '12 per leg', completed: false },
      { name: 'Calf Raises', sets: '4 sets', reps: '15-20 reps', completed: false },
      { name: 'Plank', sets: '3 sets', reps: '60 seconds', completed: false },
    ]
  },
  {
    id: 'wed',
    day: 'Wednesday',
    focus: 'Active Recovery / Cardio',
    icon: 'cardio',
    color: 'bg-orange-400',
    exercises: [
      { name: 'Light Jog or Brisk Walk', sets: '1 session', reps: '30 mins', completed: false },
      { name: 'Dynamic Stretching', sets: '1 session', reps: '15 mins', completed: false },
      { name: 'Foam Rolling', sets: '1 session', reps: '10 mins', completed: false },
    ]
  },
  {
    id: 'thu',
    day: 'Thursday',
    focus: 'Upper Body Hypertrophy',
    icon: 'strength',
    color: 'bg-blue-500',
    exercises: [
      { name: 'Incline Dumbbell Press', sets: '3 sets', reps: '10-12 reps', completed: false },
      { name: 'Seated Cable Rows', sets: '3 sets', reps: '12-15 reps', completed: false },
      { name: 'Lateral Raises', sets: '3 sets', reps: '15-20 reps', completed: false },
      { name: 'Tricep Rope Pushdowns', sets: '3 sets', reps: '12-15 reps', completed: false },
      { name: 'Face Pulls', sets: '3 sets', reps: '15-20 reps', completed: false },
    ]
  },
  {
    id: 'fri',
    day: 'Friday',
    focus: 'Lower Body & Core',
    icon: 'legs',
    color: 'bg-emerald-500',
    exercises: [
      { name: 'Leg Press', sets: '3 sets', reps: '10-12 reps', completed: false },
      { name: 'Leg Curls (Seated or Lying)', sets: '3 sets', reps: '12-15 reps', completed: false },
      { name: 'Leg Extensions', sets: '3 sets', reps: '12-15 reps', completed: false },
      { name: 'Hanging Leg Raises', sets: '3 sets', reps: '10-12 reps', completed: false },
      { name: 'Russian Twists', sets: '3 sets', reps: '20 total', completed: false },
    ]
  },
  {
    id: 'sat',
    day: 'Saturday',
    focus: 'Conditioning / Fun',
    icon: 'cardio',
    color: 'bg-purple-500',
    exercises: [
      { name: 'HIIT Circuit or Sport', sets: '1 session', reps: '20-30 mins', completed: false },
      { name: 'Full Body Stretch', sets: '1 session', reps: '20 mins', completed: false },
    ]
  },
  {
    id: 'sun',
    day: 'Sunday',
    focus: 'Rest Day',
    icon: 'rest',
    color: 'bg-slate-400',
    exercises: [
      { name: 'Rest & Recover', sets: '-', reps: 'All day', completed: false },
      { name: 'Meal Prep (Optional)', sets: '-', reps: '-', completed: false },
    ]
  },
];

const App = () => {
  const [schedule, setSchedule] = useState(() => {
    // Try to load from localStorage, otherwise use default
    try {
      const saved = localStorage.getItem('workoutSchedule');
      return saved ? JSON.parse(saved) : defaultSchedule;
    } catch (e) {
      return defaultSchedule;
    }
  });

  const [expandedDay, setExpandedDay] = useState(null);

  useEffect(() => {
    localStorage.setItem('workoutSchedule', JSON.stringify(schedule));
  }, [schedule]);

  const toggleExercise = (dayId, exerciseIndex) => {
    setSchedule(prev => prev.map(day => {
      if (day.id !== dayId) return day;
      const newExercises = [...day.exercises];
      newExercises[exerciseIndex] = {
        ...newExercises[exerciseIndex],
        completed: !newExercises[exerciseIndex].completed
      };
      return { ...day, exercises: newExercises };
    }));
  };

  const resetWeek = () => {
    if (confirm('Are you sure you want to reset all progress for the week?')) {
      setSchedule(defaultSchedule);
      setExpandedDay(null);
    }
  };

  const getProgress = () => {
    const totalExercises = schedule.reduce((acc, day) => acc + day.exercises.length, 0);
    const completedExercises = schedule.reduce((acc, day) => 
      acc + day.exercises.filter(ex => ex.completed).length, 0);
    return Math.round((completedExercises / totalExercises) * 100);
  };

  const getDayProgress = (day) => {
    if (day.exercises.length === 0) return 0;
    const completed = day.exercises.filter(ex => ex.completed).length;
    return Math.round((completed / day.exercises.length) * 100);
  };

  const getIcon = (type) => {
    switch (type) {
      case 'strength': return <Dumbbell className="w-5 h-5" />;
      case 'legs': return <Flame className="w-5 h-5" />;
      case 'cardio': return <Activity className="w-5 h-5" />;
      case 'rest': return <Moon className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const toggleDayExpand = (dayId) => {
    setExpandedDay(expandedDay === dayId ? null : dayId);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-12">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-100">
        <div className="max-w-xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-indigo-600" />
                Weekly Routine
              </h1>
              <p className="text-sm text-gray-500">Stay consistent, stay strong.</p>
            </div>
            <button 
              onClick={resetWeek}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              title="Reset Week"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Weekly Progress Bar */}
          <div className="bg-gray-100 rounded-full h-4 w-full overflow-hidden relative">
            <div 
              className="bg-indigo-600 h-full transition-all duration-500 ease-out"
              style={{ width: `${getProgress()}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-400 font-medium">
            <span>0%</span>
            <span className="text-indigo-600 font-bold">{getProgress()}% Complete</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto px-4 py-6 space-y-4">
        {schedule.map((day) => {
          const isExpanded = expandedDay === day.id;
          const dayProgress = getDayProgress(day);
          const isComplete = dayProgress === 100;

          return (
            <div 
              key={day.id} 
              className={`bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden ${isExpanded ? 'ring-2 ring-indigo-500/20 border-indigo-200 shadow-md' : 'border-gray-200 hover:border-indigo-100'}`}
            >
              {/* Day Header */}
              <button 
                onClick={() => toggleDayExpand(day.id)}
                className="w-full text-left p-4 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-lg text-white shadow-sm ${day.color}`}>
                      {getIcon(day.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{day.day}</h3>
                      <p className="text-sm text-gray-500 font-medium">{day.focus}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {isComplete && (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                        <Trophy className="w-3 h-3" /> Done
                      </span>
                    )}
                    {!isExpanded && !isComplete && dayProgress > 0 && (
                      <div className="text-xs font-medium text-gray-400">
                        {dayProgress}%
                      </div>
                    )}
                    {isExpanded ? 
                      <ChevronUp className="w-5 h-5 text-gray-300" /> : 
                      <ChevronDown className="w-5 h-5 text-gray-300" />
                    }
                  </div>
                </div>
                
                {/* Mini Progress Bar for Card */}
                {!isExpanded && (
                  <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${isComplete ? 'bg-emerald-500' : 'bg-indigo-500'} transition-all duration-500`}
                      style={{ width: `${dayProgress}%` }}
                    />
                  </div>
                )}
              </button>

              {/* Expanded Content */}
              <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-4 pt-0 border-t border-gray-100 bg-gray-50/50">
                  <div className="space-y-3 mt-4">
                    {day.exercises.map((exercise, idx) => (
                      <div 
                        key={idx}
                        onClick={() => toggleExercise(day.id, idx)}
                        className={`group flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all border ${
                          exercise.completed 
                            ? 'bg-emerald-50/50 border-emerald-100' 
                            : 'bg-white border-gray-200 hover:border-indigo-200 hover:shadow-sm'
                        }`}
                      >
                        <div className={`mt-0.5 transition-colors ${exercise.completed ? 'text-emerald-500' : 'text-gray-300 group-hover:text-indigo-400'}`}>
                          {exercise.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-medium transition-all ${exercise.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                            {exercise.name}
                          </h4>
                          <div className={`text-xs mt-1 flex gap-3 ${exercise.completed ? 'text-gray-300' : 'text-gray-500'}`}>
                            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium border border-gray-200">
                              {exercise.sets}
                            </span>
                            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium border border-gray-200">
                              {exercise.reps}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {day.exercises.length > 0 && !isComplete && (
                    <div className="mt-4 text-center">
                      <p className="text-xs text-gray-400 italic">Tap items to check them off</p>
                    </div>
                  )}
                  
                  {isComplete && (
                    <div className="mt-4 text-center p-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium animate-pulse">
                      🎉 Workout Complete! Great job!
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;