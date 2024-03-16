import './block.scss';

export default function Block(props: any) {
    return (
        <div className="block">
            <div className="image">
                <img src="/Group_.png" alt="image" />
                <div className='circle'>{props.id}</div>
            </div>
            <div className='block-title'>{props.title}</div>
            <div className='description'>{props.description}</div>

        </div>
    );
}