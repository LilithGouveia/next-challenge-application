import '../style/AboutUsContent.scss';
import Time from '../assets/time.png';

export default function AboutUsContent() {
    return (
        <>
            <div className='container'>
                <h1>Sobre Nós</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis reprehenderit aspernatur odit doloremque, adipisci vitae accusamus voluptatibus quam, eaque excepturi placeat voluptate assumenda quidem vel eum et. Culpa, ipsam dolorum?
                    </p>
                

                <div className='square-content'>
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