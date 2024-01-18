import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AboutUs from "./components/pages/about/AboutUs";
import Pustakalaya from "./components/pages/pustakalaya/Pustakalaya";
import Suchana from "./components/pages/suchana/Suchana";
import SuchanaDetail from "./components/pages/suchana/SuchanaDetail"
import PhotoGallery from "./components/pages/photo/Photo";
import PhotoCarousel from "./components/pages/photo/PhotoCarousel";
import Teams from "./components/pages/teams/Teams";
import Pratisthan from "./components/pages/pratisthan/Pratisthan";
import Gatibidi from "./components/pages/gatibidi/Gatibidi";
import Parichaye from "./components/pages/parichaye/Parichaye";
const ScrollToTop = lazy(() => import("./components/forAll/ScrollToTop"));
const Header = lazy(() => import("./components/main/header/Header"));
const NavBar = lazy(() => import("./components/main/header/NavBar"));
const Footer = lazy(() => import("./components/main/Footer"));
const Home = lazy(() => import("./components/pages/home/Home"));
const Parichaya = lazy(() => import("./components/pages/parichaya/Parichaya"));
const ParichayaSubpage = lazy(() =>
    import("./components/pages/parichaya/ParichayaSubpage")
);
const PramukhKaryaharu = lazy(() =>
    import("./components/pages/pramukhKaryaharu/PramukhKaryaharu")
);
const PramukhKaryaharuSubpage = lazy(() =>
    import("./components/pages/pramukhKaryaharu/PramukhKaryaharuSubpage")
);
const Abalokan = lazy(() => import("./components/pages/abalokan/Abalokan"));
const AbalokanSubpage = lazy(() =>
    import("./components/pages/abalokan/AbalokanSubpage")
);
const Gallery = lazy(() => import("./components/pages/gallery/Gallery"));
const GalleryImages = lazy(() =>
    import("./components/pages/gallery/GalleryImages")
);

const Contact = lazy(() => import("./components/pages/contact/Contact"));
const EnglishPages = lazy(() =>
    import("./components/pages/englishPages/EnglishPages")
);

const TankaPrasad= lazy(() =>
    import("./components/pages/tankaprasad/TankaPrasad")
);

function Main() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Suspense fallback={<div>Loading</div>}>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home />} />
                            <Route path="/aboutus/" element={<AboutUs/>} />
                            <Route
                                path="/pustakalaya"
                                element={<Pustakalaya />}
                            />
                              <Route
                                path="/suchana"
                                element={<Suchana  />}
                            />
                              <Route
                                path="/parichaye"
                                element={<Parichaye/>}
                            />
                           
                            
                             <Route path="/suchanadetail/:id" element={<SuchanaDetail />}/>
                             <Route
                                path="/photos"
                                element={<PhotoGallery />}
                            />
                              <Route path="/photocarousel/:index" element={<PhotoCarousel/>}/>
                              <Route path="/teamsmember" element={<Teams/>}/>
                              <Route path="/pratisthan" element={<Pratisthan/>}/>
                              <Route path="/gatibidi" element={<Gatibidi/>}/>
                            <Route
                                path="/parichaya/:subLink"
                                element={<ParichayaSubpage />}
                            />
                            <Route
                                path="/pramukh-karyaharu/"
                                element={<PramukhKaryaharu />}
                            />
                            <Route
                                path="/pramukh-karyaharu/:subLinkId"
                                element={<PramukhKaryaharuSubpage />}
                            />
                            <Route path="/abalokan/" element={<Abalokan />} />
                            <Route
                                path="/abalokan/:subLinkId"
                                element={<AbalokanSubpage />}
                            />
                            <Route
                                path="/gallerys"
                                element={<Gallery />}
                            />
                            <Route
                                path="/gallery/:galleryName/images"
                                element={<GalleryImages />}
                            />

                            <Route path="/contact" element={<Contact />} />
                            <Route
                                path="/inner-links/:subLink"
                                element={<EnglishPages />}
                            />
                              <Route
                                path="/tankaprasad"
                                element={<TankaPrasad />}
                            />
                        </Route>
                    </Routes>
                    <Footer />
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default Main;
