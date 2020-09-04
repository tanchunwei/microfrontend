import React from 'react';

class MicroFrontend extends React.Component {
  constructor(props) {
      super(props);

      this.state = { totalScript: 1, loadedScript : 0 };
  }

  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
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

        console.log(this.state)

        jsScripts.forEach((src) => {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `${host}/${src}`;
            script.onload = this.renderMicroFrontend;
            document.head.appendChild(script);
        });
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;

    this.setState(prevState => ({
      loadedScript : prevState.loadedScript + 1
    }));

    if(this.state.totalScript !== this.state.loadedScript){
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