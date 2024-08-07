import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/mainPage"
import ProfileUploadPage from "./Pages/profilePage";
import PersonalityPage from "./Pages/PersonalityPage";
import LoadingPage from "./Pages/loadingPage";
import ResultPage from "./Pages/resultPage";
import DetailPage from "./Pages/detailPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/main2" element={<ProfileUploadPage />}/>
                <Route path="/personality" element={<PersonalityPage />}/>
                <Route path="/loading" element={<LoadingPage />}/>
                <Route path="/result/:id" element={<ResultPage />}/>
                <Route path="/detail/:id" element={<DetailPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;