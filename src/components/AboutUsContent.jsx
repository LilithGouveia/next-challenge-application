import '../style/AboutUsContent.scss';
import Time from '../assets/time.png';

export default function AboutUsContent() {
    return (
        <>
            <div className=''>
                <div>
                    <p className='Title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit corporis. Vel excepturi qui consequuntur debitis earum ut dicta, beatae ducimus nisi veritatis dolorem impedit facilis iure velit recusandae sint ratione, neque, nesciunt accusantium laboriosam voluptas aliquid. Praesentium totam repellat ea quaerat corrupti quam! Ipsa quam repudiandae totam dolorum voluptas!
                    </p>
                
                </div>
                
                <div className='sobre-container'>
                    <ul>Lorem, ipsum.</ul>
                    <ul>Delectus, ducimus.</ul>
                    <ul>At, omnis?</ul>
                    <ul>Deserunt, quo.</ul>
                    <ul>Distinctio, suscipit?</ul>
                <img src={Time} className='image-aboutUS'/>
                </div>
            </div>
        </>
    );
}           