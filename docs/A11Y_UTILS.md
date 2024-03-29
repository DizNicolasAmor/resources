# A11Y USEFUL LINKS

Docs:

- WAI ARIA Practices: https://www.w3.org/TR/wai-aria-practices-1.1/
- Patterns (w3): https://www.w3.org/WAI/ARIA/apg/patterns/
- Patterns (a11yproject): https://www.a11yproject.com/patterns/
- Components: https://designsystem.digital.gov/components/overview/
- Screen Readers - Orca (Ubuntu): https://help.gnome.org/users/orca/stable

Libraries:

- Focus Trap Library: https://www.npmjs.com/package/focus-trap
- Focus Trap React Library: https://www.npmjs.com/package/focus-trap-react
- ReachUI (Accessible React component library): https://reach.tech/

Tools:

- A11y audit and review: https://uxdesign.cc/accessibility-tools-pt-1-validators-and-checkers-for-devs-and-qas-693a8ab74ac8
- AXE devtool: https://www.deque.com/axe/devtools/
- Check supported features: https://a11ysupport.io/
- Hiding content visually: https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content
- More information: https://www.deque.com/blog/5-digital-accessibility-myths-busted/

Snippets:

- `constants.js`

    ```
    export const KEYBOARD = {
        CODES: {
            ARROW_DOWN: 'ArrowDown',
            ARROW_LEFT: 'ArrowLeft',
            ARROW_RIGHT: 'ArrowRight',
            ARROW_UP: 'ArrowUp',
            END: 'End',
            ENTER: 'Enter',
            ESC: 'Esc',
            ESCAPE: 'Escape',
            HOME: 'Home',
            NUMPAD_ENTER: 'NumpadEnter',
            SPACE: 'Space',
            SPACE_IE: ' ',
            TAB: 'Tab',
        },
        KEYS: {
            ARROW_DOWN: 'ArrowDown',
            ARROW_LEFT: 'ArrowLeft',
            ARROW_RIGHT: 'ArrowRight',
            ARROW_UP: 'ArrowUp',
            END: 'End',
            ENTER: 'Enter',
            ESC: 'Esc',
            ESCAPE: 'Escape',
            HOME: 'Home',
            SPACE: 'Space',
            SPACE_IE: ' ',
            TAB: 'Tab',
        },
    };
    ```

- `sr-only bootstrap class`

    ```
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }
    ```
