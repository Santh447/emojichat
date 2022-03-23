import React, { Component } from 'react';
    import { Smile } from 'react-feather';

    // [..]

    class App extends Component {
      constructor() {
        super();
        this.state = {
          // [..]
          showEmojiPicker: false,
        };

        // [..]
      }

      render() {
        const {
          // [..]
          showEmojiPicker,
        } = this.state;

        return (
          <div className="App">
            // [..]
            <section className="chat-screen">
              // [..]
              <footer className="chat-footer">
                <form onSubmit={this.sendMessage} className="message-form">
                  <button
                    type="button"
                    className="toggle-emoji"
                  >
                    <Smile />
                  </button>
                  <input
                    type="text"
                    value={newMessage}
                    name="newMessage"
                    className="message-input"
                    placeholder="Type your message and hit ENTER to send"
                    onChange={this.handleInput}
                  />
                </form>
              </footer>
            </section>
            // [..]
          </div>
        );
      }
    }

    export default App;