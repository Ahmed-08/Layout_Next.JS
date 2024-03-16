import './rectangle.scss';

export default function Rectangle(props: any) {

    return (
        <div className='rectangle' style={{ left: props.left }}>
            <div className='triangle' style={{left: props.trLeft}}></div>
        </div>
    );
};