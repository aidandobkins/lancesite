import React from 'react';
import {CardContainer, ContentSubtitle, ContentText, Title} from '../components/styles/ContentCard';

const SFTPInfo = () => {
    return (
        <>
            <Title>SFTP Instructions</Title>
            <CardContainer>
                <ContentText>
                    How to connect to Aidan's SFTP Server to Transfer files <br />
                    Use whatever SFTP Client you want, Filezilla is what I use, <br />
                    but there are some online ones like{' '}
                    <a
                        style={{color: '#00c1ff'}}
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.filestash.app/sftp-browser.html">
                        this
                    </a>{' '}
                    and{' '}
                    <a style={{color: '#00c1ff'}} target="_blank" rel="noreferrer" href="https://ftpweb.net/">
                        this
                    </a>
                </ContentText>
                <ContentText>
                    Enter{' '}
                    <i>
                        <b>lancebot.net</b>
                    </i>{' '}
                    as the IP Address/Hostname, and{' '}
                    <i>
                        <b>17927</b>
                    </i>{' '}
                    as the port number (NOT 21 or 22). <br />
                    Enter the username and password that Aidan gave you.
                </ContentText>
                <ContentText>
                    From here you can download any files you see, <br />
                    and upload any if Aidan gave you the credentials to do that. <br />
                    If you are transferring any big files, like above 20GB, please let Aidan know first, <br />
                    and delete it after you've transferred it wherever you wanted to, <br />
                    unless we agree we need it many times or something like that.
                </ContentText>
            </CardContainer>
            <Title>SFTP Credentials</Title>
            <CardContainer>
                <ContentSubtitle>GUEST (download)</ContentSubtitle>
                <ContentText>
                    ASK AIDAN IF YOU NEED <br />
                    <br />
                </ContentText>
                <ContentSubtitle>USER (download & upload)</ContentSubtitle>
                <ContentText>ASK AIDAN IF YOU NEED</ContentText>
            </CardContainer>
        </>
    );
};

export default SFTPInfo;
