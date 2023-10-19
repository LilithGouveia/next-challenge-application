import '../style/sobreContent.scss';
import Time from '../assets/time.png';

export default function SobreContent() {
    return (
        <>
            <div className=''>
                <div>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit corporis. Vel excepturi qui consequuntur debitis earum ut dicta, beatae ducimus nisi veritatis dolorem impedit facilis iure velit recusandae sint ratione, neque, nesciunt accusantium laboriosam voluptas aliquid. Praesentium totam repellat ea quaerat corrupti quam! Ipsa quam repudiandae totam dolorum voluptas!
                    </p>
                
                </div>
                <img src={Time} className='image-aboutUS'/>
                <div className='transparent-square'>
                    <ul>Lorem, ipsum.</ul>
                    <ul>Quos, quo!</ul>
                    <ul>Aliquid, doloremque!</ul>
                    <ul>Deleniti, eligendi?</ul>
                    <ul>Sapiente, blanditiis?</ul>
                </div>
            </div>
        </>
    );
}           