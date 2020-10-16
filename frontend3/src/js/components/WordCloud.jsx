import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {setToggleA} from './../actions/toggle'
import ReactWordcloud from "react-wordcloud";
import stopwords from "./stopwords"
import { EuiFlexGroup, EuiFlexItem, EuiAvatar, EuiComment, EuiFieldText, EuiCard } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css';

const WordCloud = (props) => {
    const dispatch = useDispatch()

    const fetchFeatureAToggle = () => {
        fetch("/api/toggle/featureA")
            .then(res => res.json())
            .then(res => {
                dispatch(setToggleA(res))
            }
        )
    }
    fetchFeatureAToggle()

    const [words, setWords] = useState([])
    const handleEvent = (msg) => {
        var msgWords = msg.split(' ')
        var hasChange = false;
        msgWords.forEach((msgWord) => {
            msgWord = msgWord.toLowerCase();
            if(stopwords.includes(msgWord))
                return;

            hasChange = true;
            var wordObj = words.find(o => o.text === msgWord);
            if(wordObj){
                wordObj.value = wordObj.value + 1;
            } else{
               words.push({ text: msgWord, value: 1});
            }
        });

        if(hasChange){
            var newWords = words.splice(0);
            setWords(newWords)
        }
    }

    useEffect(() => {
        window.addEventListener("frontend2Message", function(evt){
            handleEvent(evt.detail.message);
        });
    }, [words]);

    const options = {
      colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
      enableTooltip: true,
      deterministic: false,
      fontFamily: "impact",
      fontSizes: [5, 60],
      fontStyle: "normal",
      fontWeight: "normal",
      padding: 1,
      rotations: 3,
      rotationAngles: [0, 90],
      scale: "sqrt",
      spiral: "archimedean",
      transitionDuration: 1000
    };

    return (
        <div>
            <EuiFlexGroup>
                <EuiFlexItem grow={1}/>
                <EuiFlexItem grow={3}>
                    <EuiCard
                        icon={<EuiAvatar size="m" name="Frontend 3" />}
                        title={`Micro-frontend 3 ${props.featureA ? 'Feature A is ON' : ''}`}
                        description={
                            <EuiFlexGroup>
                                <EuiFlexItem grow={1}>
                                    <ReactWordcloud options={options} words={words} />
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        }
                    />

                </EuiFlexItem>
                <EuiFlexItem grow={6}/>
            </EuiFlexGroup>
        </div>
    );
}

WordCloud.propTypes = {
  featureA: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        featureA: state.toggle.featureA,
    }
};


export default connect(mapStateToProps)(WordCloud);