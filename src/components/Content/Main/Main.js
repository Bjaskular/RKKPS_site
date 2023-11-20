import '../../../root.css';
import './Main.css';

const Main = () => {
    return (
        <>
        <main>
            <section className='welcome'>
                <h1 className='welcome__title'> Kancelaria prawna </h1>
                <p className='welcome__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt libero at mauris commodo, vitae placerat odio cursus. Pellentesque vel sollicitudin ex. Integer semper tincidunt magna. Curabitur ut dictum felis. Aliquam volutpat euismod eros, eget venenatis tellus hendrerit non. Pellentesque luctus diam ante, sed accumsan libero finibus id. Pellentesque condimentum nisi et feugiat lacinia.</p>
                <a href='#' className="welcome__form_contact">Formularz kontaktowy</a>
            </section>
        </main>
        <div>tets</div>
        </>
    );
}

export default Main;