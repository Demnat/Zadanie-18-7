var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            <div className={'contactItem'}>
                <img className={'contactImage'} src={'http://icons.veryicon.com/png/System/NuoveXT/Apps%20messenger.png'}/>
                <div className={'contactData'}>
                    <p className={'contactLabel'}>
                        Imię: {this.props.item.firstName}
                    </p>
                    <p className={'contactLabel'}>
                        Imię: {this.props.item.lastName}
                    </p>
                    <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
                        {this.props.item.email}
                    </a>
                </div>
            </div>
            // React.createElement('div', { className: 'contactItem' },
            //     React.createElement('img', {
            //         className: 'contactImage',
            //         src: 'http://icons.veryicon.com/png/System/NuoveXT/Apps%20messenger.png'
            //     }),
            //     React.createElement('div', { className: 'contactData' },
            //         React.createElement('p', { className: 'contactLabel' }, 'Imię: ' + this.props.item.firstName),
            //         React.createElement('p', { className: 'contactLabel' }, 'Nazwisko: ' + this.props.item.lastName),
            //         React.createElement('a', { className: 'contactEmail', href: 'mailto:' + this.props.item.email },
            //             this.props.item.email
            //         )
            //     )
            // )
        )
    },
});