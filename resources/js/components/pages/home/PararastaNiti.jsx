import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PararastaNiti = () => {
    const navigate = useNavigate();

    const [lastSection, setLastSection] = useState();

    const fetchLastSection = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_BASE_URL + "/api/last-section"
        );
        const data = await res.data;
        setLastSection(data);
    };
    useEffect(() => {
        fetchLastSection();
    }, []);

    return (
        <div className="pararasta-niti-comp">
            <div className="contents">
                <h1
                    className="title"
                    onClick={() => {
                        navigate(
                            `/abalokan/${
                                lastSection && lastSection.id && lastSection.id
                            }`
                        );
                    }}
                >
                    {lastSection && lastSection.title && lastSection.title}
                </h1>
                <div
                    className="desc"
                    onClick={() => {
                        navigate(
                            `/abalokan/${
                                lastSection && lastSection.id && lastSection.id
                            }`
                        );
                    }}
                    dangerouslySetInnerHTML={{
                        __html:
                            lastSection &&
                            lastSection.description &&
                            lastSection.description,
                    }}
                />
                {/* नेपालको परराष्ट्र नीतिपक्षमा टंकप्रसाद आचार्यले आफ्नो अठार
                    महिने छोटो प्रधानमन्त्रीत्वकालमा जुन महत्वपूर्ण काम गरे त्यस
                    को निमित्त नेपाल राष्ट्र नै उनिप्रति गर्व महसुस गर्दछ ।
                    ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध
                    कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए
                    । उनले नेपालको एकप्रकारको एकोहोरो खालको परराष्ट्र नीतिमा
                    परिर्वतन ल्याइदिए । नेपाल भारतसित विशेष सम्बन्धबाट थाहा
                    नपाइँदो तरिकाले बाँधिन पुगेको अवस्थामा उक्त डेरीलाई खुकुलो
                    पारिदिने कार्य केवल नेपालका तत्कालिन प्रधानमन्त्रि टंकप्रसाद
                    आचार्यले नै गरे । टंकप्रसाद आचार्य जहिले पनि नेपालको उन्नति
                    होस् प्रगति हास् अन्य राष्ट्रहरु कसैले पनि नेपालको
                    स्वतन्त्रता तथा सार्वभैमिकता एवं क्षेत्रीय अखण्डतामाथि आँच
                    नपुत्याउन भन्ने चाहन्थे । राणा शासनकालदेखि नै खास गरेर
                    नेपालको सम्बन्ध भारतसित विशेष रहँदै आएकोमा यिनी सत्तामा आउने
                    बित्तिकै भारतसितको एकतर्फी सम्बन्धलाई मोडेर नेपालको
                    उत्तरतिरको छिमेकी तथा राष्ट्र चीनसित पनि सन्धि गर्नु नेपालको
                    निमित्त अति नै महत्वपूर्ण एवंम दुरदर्शी कार्य थियो । जुन
                    प्रधानमन्त्रि टंकप्रसाद आचार्यले मात्र पुरा गर्न सके ।
                    विश्वका विभिन्न राष्ट्रहरुसित नेपालले दौत्य सम्बन्ध कायम
                    गत्यो । वि. स २०१३ साल श्रावण ५ गते (१९५६ जुलाई २०) का दिन
                    सोभियत रुससित २०१३ साल श्रावण १३ (१९५६ जुलाई २८) का दिन गते
                    जापानसित २०१४ साल असार ३ गते ( १९५६ जुलाई १६) का दिन
                    सिलोनसित २०१४ साल असार ३ गते (१९५६ जुलाइृ १६) का दिन
                    इजिप्टसित दौत्य सम्बन्ध राख्नु वास्तवमा टंकप्रसाद आचार्यकै
                    समयबाट अघि बढ्न सक्यो । प्रजातन्त्र स्थापना देखेको नेपालको
                    तत्कालिन अस्थिर र अविकसित राजनैतिक परिस्थिति त्यसमा
                    हस्तक्षेप र निर्णय गर्ने मौका खोजिरहेका विदेशि
                    शक्तिराष्ट्रहरु आदि यथार्थ लाई दृष्टिगत गरेर चुनाव संसद्का
                    लागि हुनुपर्ने र त्यो ब्रिटिस पार्लियामेन्ट जस्तै अधिकार
                    सम्पन्न रहनु पर्ने कुरामा आचार्यले दृढ अडान दिएको नै हो । आज
                    आमीले भोगिराखेका वर्तमान राजनीतिक परिस्थिमा पनि टंकप्रसाद
                    आचार्यले नेपालको परराष्ट्र नीतिको सोचाइ र विकासमा जुन
                    एतिहासिक महत्वपूर्ण कार्य गरि योगदान दिए त्यसलाई इमानदार
                    इतिहासकारहरुले स्वर्ण अक्षरले लेख्नु नै उनिहरुको कर्तव्य
                    ठहर्ने छ । आजको नेपालले जति पनि राष्ट्रहरुसित दौत्य सम्बन्ध
                    राख्दै विश्व राजनीतिमा अघि बढ्न सकिरहेको छ त्यसको निमित्त
                    खुट्किला तयार पारिदिने कार्य स्व.टंकप्रसाद आचार्यबाट नै भएको
                    हो भन्ने कुरोमा सायद विद्वानहरुको राय नबाझिन सक्छ । हाम्रो
                    परराष्ट्रनीतिलाई पहिलोपटक असंलग्न र तटस्थ रुप दिदै
                    शान्तिपूर्ण सहअस्तित्वका पाँच सिद्वान्तहरुका आधारमा
                    विविभतापूर्ण कूटनैतिक तथा आर्थिक सम्बन्धको विकार गरेर
                    नेपालको स्वाधिनताको प्रत्याभू ितगर्ने दिशामा स्व.
                    प्रधानमन्त्रि टंकप्रसाद आचार्यको भूमिका अद्वितीय एवं
                    अविस्मरणीय छ । उल्लेखित पुस्तक मा थुप्रै संग्रहणिय एवं पठनिय
                    सामाग्रीले भरिपूर्ण छ । यो पुस्तक स्व.टंकप्रसाद आचार्य मा
                    विद्याावारिधी गर्नुहुने .सह प्राध्यापक डा. शोभा पोख्रेल ले
                    तयार पार्नु भएको छ । */}
                {/* </div> */}
                <div className="read-more-wrapper">
                    {window.innerWidth <= "1020" && (
                        <span
                            className="btn-text"
                            onClick={() => {
                                navigate("/abalokan/pararasta");
                            }}
                        >
                            थप पढ्नुहोस्
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PararastaNiti;
