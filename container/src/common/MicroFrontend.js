import React from 'react';

class MicroFrontend extends React.Component {
  handleRender = () => {
    this.renderMicroFrontend(false);
  }

  handleErrorRender = () => {
      this.renderMicroFrontendError();
    }

  constructor(props) {
      super(props);

      this.state = { totalScript: 1, loadedScript : 0, errorOnLoad : false};
  }

  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if(this.state.errorOnLoad){
        this.renderMicroFrontendError()
        return;
    }
    else if (document.getElementById(scriptId)) {
      this.renderMicroFrontend(true);
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        let jsScripts = []
        if(manifest.entrypoints)
            jsScripts = manifest.entrypoints.filter(key => key.match(/.js$/))
        else
            jsScripts = Object.values(manifest).filter(key => key.match(/.js$/))
        this.setState({
          totalScript: jsScripts.length, loadedScript : 0
        });

        jsScripts.forEach((src) => {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `${host}/${src}`;
            script.onload = this.handleRender
            document.head.appendChild(script);
        });
      })
      .catch(err => {
        console.log("Error when fetching microfrontend: " + err);
        this.setState({
          errorOnLoad : true
        });
        this.handleErrorRender()
      });

  }

  componentWillUnmount() {
    const { name, window } = this.props;

    if(this.state.errorOnLoad){
        window[`unmountMicroFrontendError`](`${name}-container`);
    }else{
        window[`unmount${name}`](`${name}-container`);
    }
  }

  renderMicroFrontendError = () => {
    const { name, window, history } = this.props;

    window[`renderMicroFrontendError`](`${name}-container`, history);
    // e.g window.renderFrontend1('Frontend1-container', history);
  };

  renderMicroFrontend = (isLoaded) => {
    const { name, window, history } = this.props;

    this.setState(prevState => ({
      loadedScript : prevState.loadedScript + 1
    }));

    if(!isLoaded && this.state.totalScript !== this.state.loadedScript){
        return;
    }

    window[`render${name}`](`${name}-container`, history);
    // e.g window.renderFrontend1('Frontend1-container', history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;