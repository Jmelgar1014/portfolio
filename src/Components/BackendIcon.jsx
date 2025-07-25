import React from "react";

const BackendIcon = ({ color }) => {
  return (
    <>
      <svg
        className={color}
        width="40"
        height="40"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M12 20q-3.506 0-5.753-.893T4 16.807V7q0-1.246 2.34-2.123T12 4t5.66.877T20 7v9.808q0 1.405-2.247 2.299T12 20m0-11.11q2.148 0 4.33-.599q2.184-.599 2.612-1.305q-.41-.744-2.57-1.365T12 5q-2.179 0-4.366.599t-2.615 1.31q.408.75 2.576 1.366T12 8.891m0 5.032q1.03 0 2.025-.1t1.901-.297t1.685-.491T19 12.37V8.275q-.611.37-1.39.664q-.777.294-1.684.49q-.907.198-1.901.298t-2.025.1q-1.07 0-2.079-.11t-1.906-.306t-1.663-.482T5 8.275v4.096q.587.37 1.352.654t1.663.482q.896.197 1.906.307t2.079.109M12 19q1.285 0 2.443-.146t2.082-.414t1.57-.641t.905-.805v-3.623q-.611.37-1.39.664q-.777.294-1.684.491t-1.901.297t-2.025.1q-1.07 0-2.079-.11t-1.906-.306t-1.663-.482q-.766-.284-1.352-.654V17q.26.452.903.812t1.566.627t2.085.415T12 19"
        />
      </svg>
    </>
  );
};

export default BackendIcon;
