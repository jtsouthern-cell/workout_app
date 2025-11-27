{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red183\green111\blue247;\red23\green24\blue24;\red202\green202\blue202;
\red54\green192\blue160;\red212\green212\blue212;\red113\green192\blue131;\red109\green115\blue120;\red246\green124\blue48;
\red238\green46\blue56;}
{\*\expandedcolortbl;;\cssrgb\c77255\c54118\c97647;\cssrgb\c11765\c12157\c12549;\cssrgb\c83137\c83137\c83137;
\cssrgb\c23922\c78824\c69020;\cssrgb\c86275\c86275\c86275;\cssrgb\c50588\c78824\c58431;\cssrgb\c50196\c52549\c54510;\cssrgb\c98039\c56471\c24314;
\cssrgb\c95686\c27843\c27843;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 React\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  useState\cf6 \strokec6 ,\cf4 \strokec4  useEffect \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'react'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 Dumbbell\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Activity\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Calendar\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 CheckCircle2\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 Circle\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 ChevronDown\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 ChevronUp\cf6 \strokec6 ,\cf4 \strokec4  \cb1 \
\cb3   \cf5 \strokec5 RotateCcw\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Trophy\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Flame\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 Moon\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'lucide-react'\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  defaultSchedule \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'mon'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     day\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Monday'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     focus\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Upper Body Strength'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'strength'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     color\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-blue-500'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     exercises\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Bench Press'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '8-10 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Bent Over Rows'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '8-10 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Overhead Press'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '10-12 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Pull-ups (or Lat Pulldowns)'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'AMRAP'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Dumbbell Bicep Curls'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '12-15 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'tue'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     day\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Tuesday'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     focus\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Lower Body Strength'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'legs'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     color\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-emerald-500'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     exercises\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Barbell Squats'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '6-8 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Romanian Deadlifts'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '8-10 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Walking Lunges'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '12 per leg'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Calf Raises'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '4 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '15-20 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Plank'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '60 seconds'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'wed'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     day\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Wednesday'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     focus\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Active Recovery / Cardio'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'cardio'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     color\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-orange-400'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     exercises\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Light Jog or Brisk Walk'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '1 session'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '30 mins'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Dynamic Stretching'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '1 session'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '15 mins'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Foam Rolling'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '1 session'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '10 mins'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'thu'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     day\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Thursday'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     focus\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Upper Body Hypertrophy'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'strength'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     color\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-blue-500'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     exercises\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Incline Dumbbell Press'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '10-12 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Seated Cable Rows'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '12-15 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Lateral Raises'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '15-20 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Tricep Rope Pushdowns'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '12-15 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Face Pulls'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '15-20 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'fri'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     day\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Friday'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     focus\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Lower Body & Core'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'legs'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     color\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-emerald-500'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     exercises\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Leg Press'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '10-12 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Leg Curls (Seated or Lying)'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '12-15 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Leg Extensions'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '12-15 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Hanging Leg Raises'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '10-12 reps'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Russian Twists'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '3 sets'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '20 total'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'sat'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     day\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Saturday'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     focus\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Conditioning / Fun'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'cardio'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     color\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-purple-500'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     exercises\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'HIIT Circuit or Sport'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '1 session'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '20-30 mins'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Full Body Stretch'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '1 session'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '20 mins'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     id\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'sun'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     day\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Sunday'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     focus\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Rest Day'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     icon\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'rest'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     color\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-slate-400'\cf6 \strokec6 ,\cf4 \cb1 \strokec4 \
\cb3     exercises\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 [\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Rest & Recover'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '-'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'All day'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf4 \strokec4  name\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'Meal Prep (Optional)'\cf6 \strokec6 ,\cf4 \strokec4  sets\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '-'\cf6 \strokec6 ,\cf4 \strokec4  reps\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '-'\cf6 \strokec6 ,\cf4 \strokec4  completed\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 false\cf4 \strokec4  \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 ]\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 ];\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 App\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 schedule\cf6 \strokec6 ,\cf4 \strokec4  setSchedule\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf8 \strokec8 // Try to load from localStorage, otherwise use default\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 try\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  saved \cf6 \strokec6 =\cf4 \strokec4  localStorage\cf6 \strokec6 .\cf4 \strokec4 getItem\cf6 \strokec6 (\cf7 \strokec7 'workoutSchedule'\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 return\cf4 \strokec4  saved \cf6 \strokec6 ?\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 parse\cf6 \strokec6 (\cf4 \strokec4 saved\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  defaultSchedule\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 catch\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 return\cf4 \strokec4  defaultSchedule\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \});\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 expandedDay\cf6 \strokec6 ,\cf4 \strokec4  setExpandedDay\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\
\cb3   useEffect\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     localStorage\cf6 \strokec6 .\cf4 \strokec4 setItem\cf6 \strokec6 (\cf7 \strokec7 'workoutSchedule'\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 JSON\cf6 \strokec6 .\cf4 \strokec4 stringify\cf6 \strokec6 (\cf4 \strokec4 schedule\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 schedule\cf6 \strokec6 ]);\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  toggleExercise \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 dayId\cf6 \strokec6 ,\cf4 \strokec4  exerciseIndex\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     setSchedule\cf6 \strokec6 (\cf4 \strokec4 prev \cf6 \strokec6 =>\cf4 \strokec4  prev\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 day \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 id \cf6 \strokec6 !==\cf4 \strokec4  dayId\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  day\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf4 \strokec4  newExercises \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [...\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 exercises\cf6 \strokec6 ];\cf4 \cb1 \strokec4 \
\cb3       newExercises\cf6 \strokec6 [\cf4 \strokec4 exerciseIndex\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 ...\cf4 \strokec4 newExercises\cf6 \strokec6 [\cf4 \strokec4 exerciseIndex\cf6 \strokec6 ],\cf4 \cb1 \strokec4 \
\cb3         completed\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 newExercises\cf6 \strokec6 [\cf4 \strokec4 exerciseIndex\cf6 \strokec6 ].\cf4 \strokec4 completed\cb1 \
\cb3       \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf6 \strokec6 ...\cf4 \strokec4 day\cf6 \strokec6 ,\cf4 \strokec4  exercises\cf6 \strokec6 :\cf4 \strokec4  newExercises \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}));\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  resetWeek \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 confirm\cf6 \strokec6 (\cf7 \strokec7 'Are you sure you want to reset all progress for the week?'\cf6 \strokec6 ))\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       setSchedule\cf6 \strokec6 (\cf4 \strokec4 defaultSchedule\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3       setExpandedDay\cf6 \strokec6 (\cf2 \strokec2 null\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  getProgress \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 ()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  totalExercises \cf6 \strokec6 =\cf4 \strokec4  schedule\cf6 \strokec6 .\cf4 \strokec4 reduce\cf6 \strokec6 ((\cf4 \strokec4 acc\cf6 \strokec6 ,\cf4 \strokec4  day\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  acc \cf6 \strokec6 +\cf4 \strokec4  day\cf6 \strokec6 .\cf4 \strokec4 exercises\cf6 \strokec6 .\cf4 \strokec4 length\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  completedExercises \cf6 \strokec6 =\cf4 \strokec4  schedule\cf6 \strokec6 .\cf4 \strokec4 reduce\cf6 \strokec6 ((\cf4 \strokec4 acc\cf6 \strokec6 ,\cf4 \strokec4  day\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cb1 \
\cb3       acc \cf6 \strokec6 +\cf4 \strokec4  day\cf6 \strokec6 .\cf4 \strokec4 exercises\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 ex \cf6 \strokec6 =>\cf4 \strokec4  ex\cf6 \strokec6 .\cf4 \strokec4 completed\cf6 \strokec6 ).\cf4 \strokec4 length\cf6 \strokec6 ,\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 Math\cf6 \strokec6 .\cf4 \strokec4 round\cf6 \strokec6 ((\cf4 \strokec4 completedExercises \cf6 \strokec6 /\cf4 \strokec4  totalExercises\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  getDayProgress \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 day\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 exercises\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf9 \strokec9 0\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf4 \strokec4  completed \cf6 \strokec6 =\cf4 \strokec4  day\cf6 \strokec6 .\cf4 \strokec4 exercises\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 ex \cf6 \strokec6 =>\cf4 \strokec4  ex\cf6 \strokec6 .\cf4 \strokec4 completed\cf6 \strokec6 ).\cf4 \strokec4 length\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 Math\cf6 \strokec6 .\cf4 \strokec4 round\cf6 \strokec6 ((\cf4 \strokec4 completed \cf6 \strokec6 /\cf4 \strokec4  day\cf6 \strokec6 .\cf4 \strokec4 exercises\cf6 \strokec6 .\cf4 \strokec4 length\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 *\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  getIcon \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf2 \strokec2 type\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 switch\cf4 \strokec4  \cf6 \strokec6 (\cf2 \strokec2 type\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf7 \strokec7 'strength'\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Dumbbell\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-5 h-5"\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf7 \strokec7 'legs'\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Flame\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-5 h-5"\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf7 \strokec7 'cardio'\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Activity\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-5 h-5"\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf7 \strokec7 'rest'\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Moon\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-5 h-5"\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 default\cf6 \strokec6 :\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Activity\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-5 h-5"\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf4 \strokec4  toggleDayExpand \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 dayId\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     setExpandedDay\cf6 \strokec6 (\cf4 \strokec4 expandedDay \cf6 \strokec6 ===\cf4 \strokec4  dayId \cf6 \strokec6 ?\cf4 \strokec4  \cf2 \strokec2 null\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  dayId\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "min-h-screen bg-gray-50 text-gray-800 font-sans pb-12"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Header */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-white shadow-sm sticky top-0 z-10 border-b border-gray-100"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-xl mx-auto px-4 py-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex justify-between items-center mb-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 h1 className\cf6 \strokec6 =\cf7 \strokec7 "text-2xl font-bold text-gray-900 flex items-center gap-2"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf5 \strokec5 Calendar\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6 text-indigo-600"\cf4 \strokec4  />\cb1 \
\cb3                 \cf5 \strokec5 Weekly\cf4 \strokec4  \cf5 \strokec5 Routine\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 h1\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-sm text-gray-500"\cf6 \strokec6 >\cf5 \strokec5 Stay\cf4 \strokec4  consistent\cf6 \strokec6 ,\cf4 \strokec4  stay strong\cf6 \strokec6 .</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3               onClick\cf6 \strokec6 =\{\cf4 \strokec4 resetWeek\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               className\cf6 \strokec6 =\cf7 \strokec7 "p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"\cf4 \cb1 \strokec4 \
\cb3               title\cf6 \strokec6 =\cf7 \strokec7 "Reset Week"\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf5 \strokec5 RotateCcw\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-5 h-5"\cf4 \strokec4  />\cb1 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3           \cf6 \strokec6 \{\cf8 \strokec8 /* Weekly Progress Bar */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-gray-100 rounded-full h-4 w-full overflow-hidden relative"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div \cb1 \
\cb3               className\cf6 \strokec6 =\cf7 \strokec7 "bg-indigo-600 h-full transition-all duration-500 ease-out"\cf4 \cb1 \strokec4 \
\cb3               style\cf6 \strokec6 =\{\{\cf4 \strokec4  width\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \strokec4 getProgress\cf6 \strokec6 ()\}\cf7 \strokec7 %`\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \cb1 \strokec4 \
\cb3             />\cb1 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex justify-between mt-1 text-xs text-gray-400 font-medium"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 span\cf6 \strokec6 >\cf9 \strokec9 0\cf4 \strokec4 %</span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-indigo-600 font-bold"\cf6 \strokec6 >\{\cf4 \strokec4 getProgress\cf6 \strokec6 ()\}%\cf4 \strokec4  \cf5 \strokec5 Complete\cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 span\cf6 \strokec6 >\cf9 \strokec9 100\cf4 \strokec4 %</span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 \{\cf8 \strokec8 /* Main Content */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "max-w-xl mx-auto px-4 py-6 space-y-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \{\cf4 \strokec4 schedule\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 day\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 const\cf4 \strokec4  isExpanded \cf6 \strokec6 =\cf4 \strokec4  expandedDay \cf6 \strokec6 ===\cf4 \strokec4  day\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 const\cf4 \strokec4  dayProgress \cf6 \strokec6 =\cf4 \strokec4  getDayProgress\cf6 \strokec6 (\cf4 \strokec4 day\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 const\cf4 \strokec4  isComplete \cf6 \strokec6 =\cf4 \strokec4  dayProgress \cf6 \strokec6 ===\cf4 \strokec4  \cf9 \strokec9 100\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
\
\cb3           \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 <\cf4 \strokec4 div \cb1 \
\cb3               key\cf6 \strokec6 =\{\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  \cb1 \
\cb3               className\cf6 \strokec6 =\{\cf7 \strokec7 `bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden \cf6 \strokec6 $\{\cf4 \strokec4 isExpanded \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'ring-2 ring-indigo-500/20 border-indigo-200 shadow-md'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'border-gray-200 hover:border-indigo-100'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 \{\cf8 \strokec8 /* Day Header */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 button \cb1 \
\cb3                 onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  toggleDayExpand\cf6 \strokec6 (\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                 className\cf6 \strokec6 =\cf7 \strokec7 "w-full text-left p-4 focus:outline-none"\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center justify-between"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `p-2.5 rounded-lg text-white shadow-sm \cf6 \strokec6 $\{\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 color\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 \{\cf4 \strokec4 getIcon\cf6 \strokec6 (\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 icon\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "font-bold text-lg text-gray-900"\cf6 \strokec6 >\{\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 day\cf6 \strokec6 \}</\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-sm text-gray-500 font-medium"\cf6 \strokec6 >\{\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 focus\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cb1 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-3"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 \{\cf4 \strokec4 isComplete \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf5 \strokec5 Trophy\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-3 h-3"\cf4 \strokec4  /> \cf5 \strokec5 Done\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 \{!\cf4 \strokec4 isExpanded \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 isComplete \cf6 \strokec6 &&\cf4 \strokec4  dayProgress \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-xs font-medium text-gray-400"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 \{\cf4 \strokec4 dayProgress\cf6 \strokec6 \}%\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 \{\cf4 \strokec4 isExpanded \cf6 \strokec6 ?\cf4 \strokec4  \cb1 \
\cb3                       \cf6 \strokec6 <\cf5 \strokec5 ChevronUp\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-5 h-5 text-gray-300"\cf4 \strokec4  /> \cf6 \strokec6 :\cf4 \strokec4  \cb1 \
\cb3                       \cf6 \strokec6 <\cf5 \strokec5 ChevronDown\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-5 h-5 text-gray-300"\cf4 \strokec4  />\cb1 \
\cb3                     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cb1 \
\cb3                 \cf6 \strokec6 \{\cf8 \strokec8 /* Mini Progress Bar for Card */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 \{!\cf4 \strokec4 isExpanded \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div \cb1 \
\cb3                       className\cf6 \strokec6 =\{\cf7 \strokec7 `h-full \cf6 \strokec6 $\{\cf4 \strokec4 isComplete \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-emerald-500'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-indigo-500'\cf6 \strokec6 \}\cf7 \strokec7  transition-all duration-500`\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                       style\cf6 \strokec6 =\{\{\cf4 \strokec4  width\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \strokec4 dayProgress\cf6 \strokec6 \}\cf7 \strokec7 %`\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \cb1 \strokec4 \
\cb3                     />\cb1 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 button\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\
\cb3               \cf6 \strokec6 \{\cf8 \strokec8 /* Expanded Content */\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `transition-all duration-300 ease-in-out \cf6 \strokec6 $\{\cf4 \strokec4 isExpanded \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'max-h-[800px] opacity-100'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'max-h-0 opacity-0'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "px-4 pb-4 pt-0 border-t border-gray-100 bg-gray-50/50"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "space-y-3 mt-4"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 \{\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 exercises\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 exercise\cf6 \strokec6 ,\cf4 \strokec4  idx\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 div \cb1 \
\cb3                         key\cf6 \strokec6 =\{\cf4 \strokec4 idx\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                         onClick\cf6 \strokec6 =\{()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  toggleExercise\cf6 \strokec6 (\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 ,\cf4 \strokec4  idx\cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                         className\cf6 \strokec6 =\{\cf7 \strokec7 `group flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all border \cf6 \strokec6 $\{\cf4 \cb1 \strokec4 \
\cb3                           exercise\cf6 \strokec6 .\cf4 \strokec4 completed \cb1 \
\cb3                             \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-emerald-50/50 border-emerald-100'\cf4 \strokec4  \cb1 \
\cb3                             \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'bg-white border-gray-200 hover:border-indigo-200 hover:shadow-sm'\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `mt-0.5 transition-colors \cf6 \strokec6 $\{\cf4 \strokec4 exercise\cf6 \strokec6 .\cf4 \strokec4 completed \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'text-emerald-500'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-gray-300 group-hover:text-indigo-400'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 \{\cf4 \strokec4 exercise\cf6 \strokec6 .\cf4 \strokec4 completed \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 CheckCircle2\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6"\cf4 \strokec4  /> \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Circle\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6"\cf4 \strokec4  />\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex-1"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 <\cf4 \strokec4 h4 className\cf6 \strokec6 =\{\cf7 \strokec7 `font-medium transition-all \cf6 \strokec6 $\{\cf4 \strokec4 exercise\cf6 \strokec6 .\cf4 \strokec4 completed \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'text-gray-400 line-through'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-gray-900'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 \{\cf4 \strokec4 exercise\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 </\cf4 \strokec4 h4\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `text-xs mt-1 flex gap-3 \cf6 \strokec6 $\{\cf4 \strokec4 exercise\cf6 \strokec6 .\cf4 \strokec4 completed \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'text-gray-300'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-gray-500'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium border border-gray-200"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 \{\cf4 \strokec4 exercise\cf6 \strokec6 .\cf4 \strokec4 sets\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium border border-gray-200"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                               \cf6 \strokec6 \{\cf4 \strokec4 exercise\cf6 \strokec6 .\cf4 \strokec4 reps\cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3                             \cf6 \strokec6 </\cf4 \strokec4 span\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                           \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                         \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 ))\}\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cb1 \
\cb3                   \cf6 \strokec6 \{\cf4 \strokec4 day\cf6 \strokec6 .\cf4 \strokec4 exercises\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 >\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 isComplete \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "mt-4 text-center"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-xs text-gray-400 italic"\cf6 \strokec6 >\cf5 \strokec5 Tap\cf4 \strokec4  items to check them off\cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                   \cb1 \
\cb3                   \cf6 \strokec6 \{\cf4 \strokec4 isComplete \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "mt-4 text-center p-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium animate-pulse"\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                       \cf10 \strokec10 \uc0\u55356 \u57225 \cf4 \strokec4  \cf5 \strokec5 Workout\cf4 \strokec4  \cf5 \strokec5 Complete\cf6 \strokec6 !\cf4 \strokec4  \cf5 \strokec5 Great\cf4 \strokec4  job\cf6 \strokec6 !\cf4 \cb1 \strokec4 \
\cb3                     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3                   \cf6 \strokec6 )\}\cf4 \cb1 \strokec4 \
\cb3                 \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3               \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3           \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 \})\}\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 \};\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf5 \strokec5 App\cf6 \strokec6 ;\cf4 \cb1 \strokec4 \
}
