import Link from 'next/link';
import './window.scss';


export default function Window(props: any) {

    console.log('test ', props.window.top);
    return (
        <div className="window-block" style={{ top: props.window.top, height: props.window.height }}>
            <div className="drop">
                <div className='image' style={{ border: props.window.border, borderRadius: props.window.radius }}>
                    <img src={props.window.path} />
                </div>
            </div>

            <div className='arrow'>
                <img src={props.window.arrow} alt='arrow' />
                <div className='text'>
                    <p>
                        {props.window.text}<br />
                        <span>{props.window.spantext}</span>
                    </p>
                </div>
            </div>

            <Link href={`/pages/${props.window.link}`}>
                <img src={props.window.imgbtn} className='image-button' />
            </Link>

        </div>
    )
}