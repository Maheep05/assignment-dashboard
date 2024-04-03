import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function ProgressBar() {
    return (
        <div className='h-10 w-10'>
            <CircularProgressbar
                value={(1 / 4) * 100 } 
                text= '4'
                styles={{
                    root: {},
                    path: {
                        stroke: `rgba(107, 184, 244)`, // Set the stroke color based on completion percentage
                        strokeLinecap: 'round',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        // Increase the strokeWidth for a thicker circle and stroke
                        strokeWidth: 10,
                    },
                    trail: {
                        stroke: '#d1eaf9',
                        strokeLinecap: 'round',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    text: {
                        fill: '#000000',
                        fontSize: '30px',
                    },
                    background: {
                        fill: '#d1eaf9',
                    },
                }}
            />
        </div>
    )
}
