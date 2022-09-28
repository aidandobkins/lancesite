import React, {useState, useEffect, Component} from 'react';
import {LancePhoto} from './styles/Lance';
import {CardContainer, ContentText} from '../components/styles/ContentCard';

const Lance = () => {
    const [lancePhoto, setLancePhoto] = useState({src: ''});

    const getLancePhoto = async () => {
        fetch('/api/getLancePhoto')
            .then((response) => response.blob())
            .then((blob) => {
                setLancePhoto({src: URL.createObjectURL(blob)});
            });
    };

    useEffect(() => {
        (async () => {
            getLancePhoto();
        })();
    }, []);

    return (
        <CardContainer>
            <ContentText>Lance of the Day</ContentText>
            {lancePhoto.src && <LancePhoto src={lancePhoto.src}></LancePhoto>}
        </CardContainer>
    );
};

export default Lance;
