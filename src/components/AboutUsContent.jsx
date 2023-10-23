import '../style/AboutUsContent.scss';
import Time from '../assets/time.png';

export default function AboutUsContent() {
    return (
        <>
            <div className='container'>
                <h1>Sobre Nós</h1>
                    <p>
                    Bem-vindo à SoftForge: Pioneiros na Revolução da Qualidade do Ar!

Na SoftForge, não somos apenas uma empresa; somos uma paixão, uma missão, e uma promessa de um futuro mais saudável e vibrante. Com um compromisso inabalável em melhorar a qualidade de vida das pessoas, nossa jornada é impulsionada pela inovação, sustentabilidade e o desejo sincero de criar um mundo onde todos possam respirar com facilidade.
                    </p>

                    <h1>Quem somos?</h1>
                    <p>
                    Somos a SoftForge, uma equipe de visionários dedicados a transformar a qualidade do ar que você respira. Nossa empresa foi fundada com uma visão audaciosa: criar soluções inovadoras que façam a diferença, não apenas em nossas vidas, mas em todo o planeta.
                    </p>

                    <h1>AquaTank: O Futuro da Qualidade do Ar</h1>
                    <p>
                    Nosso projeto principal, o "AquaTank," é uma revolução em termos de qualidade do ar. O AquaTank é mais do que um produto; é uma obra de arte da engenharia que combina a beleza de um aquário com o poder das algas para purificar o ar que você respira. As algas absorvem CO2 e liberam oxigênio, tornando o ambiente mais fresco e saudável. O AquaTank é uma maneira eficaz e natural de melhorar a qualidade do ar em sua casa ou local de trabalho.
                    </p>

                    <h1>Nossa Missão:</h1>
                    <p>
                    Nossa missão é simples, mas poderosa: melhorar a qualidade de vida das pessoas. Estamos empenhados em tornar o mundo um lugar mais saudável, mais verde e mais inspirador. Acreditamos que todos merecem ar puro e fresco para viver, trabalhar e prosperar.
                    </p>

                    <h1>Por Que Escolher a SoftForge?</h1>
                    <ol>
                        <li>Compromisso Inabalável: Somos apaixonados e dedicados à qualidade do ar, comprometidos com nossa missão.</li>
                        <li>Inovação Sustentável: O AquaTank reflete nosso compromisso com sliuções ecologicamente conscientes e a promoção da sustentabilidade.</li>
                        <li>Qualidade Intransigente: Cada AquaTank é criado com precisão e qualidade excepcionais, atendendo aos mais altos padrões.</li>
                        <li>Foco no Cliente: Valorizamos nossos clientes e parceiros, buscando ouvir, aprender e crescer juntos.</li>
                    </ol>

                    <p>Na SoftForge, acreditamos que o futuro é agora. Nosso compromisso com a melhoria da qualidade do ar é sério, visando moldar um amanhã mais saudável e vibrante. Junte-se a nós nessa emocionante jornada em direção a um ar mais puro e uma vida melhor.</p>
                

                <div className='square-content'>
                    <img src={Time} className='image-aboutUS'/>
                </div>
            </div>
        </>
    );
}           