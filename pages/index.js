 /* import  Link  from '../src/components/Link'
import Footer from '../src/components/patterns/Footer';



function Title({children, as}) {
    const Tag = as;
    return(
        <>
        <Tag>
            {children}
        </Tag>
        <style jsx>{`
        ${Tag} {
            color: red;
            font-family: sans-serif;
        }
        `}</style>
        </>
    )
}

export default function HomePage () {
    return(
        <div>
            <Title>Alura Cases</Title>
           <Link href="/faq">
            Ir para o faq
           </Link>
           <Footer/>
        </div>
    )
} */

import HomeScreen from '../src/screens/HomeScreen';

export default HomeScreen;