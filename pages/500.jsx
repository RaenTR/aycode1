import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Oh. Görünüşe göre 500 Dahili Sunucu Hatası var.Lütfen daha sonra tekrar deneyin!"} />
}

export default UnkownPage;