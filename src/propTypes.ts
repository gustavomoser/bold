import { ComponentDoc } from 'react-docgen-typescript/lib/parser'

const propTypes: {[key in string]: ComponentDoc} = {
    'Button': {
        displayName: 'Button',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: `css className`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'loading': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onClick': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLButtonElement>) => any',
                    value: 'undefined'
                }
            },
            'onMouseEnter': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<any>) => void',
                    value: 'undefined'
                }
            },
            'onMouseLeave': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<any>) => void',
                    value: 'undefined'
                }
            },
            'tabIndex': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'type': {
                defaultValue: 'normal',
                description: ``,
                required: false,
                type: {
                    name: 'Type',
                    value: 'undefined'
                }
            },
            'hint': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'hintClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'hintPlacement': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'hintType': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"normal" | "primary"',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Hint': {
        displayName: 'Hint',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'placement': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Placement',
                    value: 'undefined'
                }
            },
            'componente': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'type': {
                defaultValue: 'normal',
                description: ``,
                required: false,
                type: {
                    name: '"normal" | "primary"',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'Icon': {
        displayName: 'Icon',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"small" | "medium" | "large" | "is-12px" | "gigantic"',
                    value: 'undefined'
                }
            },
            'onMouseOver': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Function',
                    value: 'undefined'
                }
            },
            'onMouseLeave': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Function',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'Label': {
        displayName: 'Label',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'Popover': {
        displayName: 'Popover',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'borderColor': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'color': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onHide': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'placement': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Placement',
                    value: 'undefined'
                }
            },
            'rootClose': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'show': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'target': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | number | boolean | {} | Function | ReactElement<any> | (string | number | boolean | any[...',
                    value: 'undefined'
                }
            }
        }
    },
    'Text': {
        displayName: 'Text',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'color': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Color',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'weight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Weight',
                    value: 'undefined'
                }
            },
            'tag': {
                defaultValue: 'span',
                description: ``,
                required: false,
                type: {
                    name: 'TextTag',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModal': {
        displayName: 'AlertModal',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'info': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'success': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalError': {
        displayName: 'AlertModalError',
        description: ``,
        props: {
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onClose': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalLeave': {
        displayName: 'AlertModalLeave',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'callback': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(shouldNavigate: boolean) => void',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalSuccess': {
        displayName: 'AlertModalSuccess',
        description: ``,
        props: {
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onClose': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'result': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalDelete': {
        displayName: 'AlertModalDelete',
        description: ``,
        props: {
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'onClose': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'onOk': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalConfirmacao': {
        displayName: 'AlertModalConfirmacao',
        description: ``,
        props: {
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onClose': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'onOk': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalContent': {
        displayName: 'AlertModalContent',
        description: ``,
        props: {
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'Modal': {
        displayName: 'Modal',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'active': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'Currency': {
        displayName: 'Currency',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            }
        }
    },
    'Number': {
        displayName: 'Number',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'minDecimalPlaces': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'maxDecimalPlaces': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: '',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'abbrev': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'prefix': {
                defaultValue: '',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'sufix': {
                defaultValue: '',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'Percentage': {
        displayName: 'Percentage',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: `Número de 0 a 1 representando o quociente que será transformado para porcentagem`,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'minDecimalPlaces': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'maxDecimalPlaces': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'Plural': {
        displayName: 'Plural',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'word': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'count': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'inclusive': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'ErrorIndicator': {
        displayName: 'ErrorIndicator',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '{ titulo: string; mensagem: string; }',
                    value: 'undefined'
                }
            }
        }
    },
    'FormField': {
        displayName: 'FormField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'FormLabel': {
        displayName: 'FormLabel',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'CheckboxField': {
        displayName: 'CheckboxField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDragStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDrop': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'RadioField': {
        displayName: 'RadioField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'TextField': {
        displayName: 'TextField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'normalize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Normalizer',
                    value: 'undefined'
                }
            },
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Parser',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Formatter',
                    value: 'undefined'
                }
            }
        }
    },
    'Checkbox': {
        displayName: 'Checkbox',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDragStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDrop': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Input': {
        displayName: 'Input',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'type': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            }
        }
    },
    'RadioButton': {
        displayName: 'RadioButton',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'TextInput': {
        displayName: 'TextInput',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Field': {
        displayName: 'Field',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'hasWrapper': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'type': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'render': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(props: WrappedFieldProps) => Element',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Parser',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Formatter',
                    value: 'undefined'
                }
            },
            'normalize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Normalizer',
                    value: 'undefined'
                }
            },
            'validate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Validator | Validator[]',
                    value: 'undefined'
                }
            },
            'warn': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Validator | Validator[]',
                    value: 'undefined'
                }
            },
            'withRef': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'Form': {
        displayName: 'Form',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'errorIcon': {
                defaultValue: 'modal-erro',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'errorModal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StatelessComponent<ErrorModalProps> | ComponentClass<ErrorModalProps>',
                    value: 'undefined'
                }
            },
            'hasErrorModal': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'hasLeaveModal': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'hasSuccessModal': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'successContent': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Element',
                    value: 'undefined'
                }
            },
            'successIcon': {
                defaultValue: 'modal-sucesso',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'successModal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StatelessComponent<SuccessModalProps> | ComponentClass<SuccessModalProps>',
                    value: 'undefined'
                }
            },
            'successTitle': {
                defaultValue: 'Cadastro realizado com sucesso!',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onSubmit': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'onSubmitSuccess': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'onSubmitFail': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'render': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(props: FormComponentProps) => ReactNode',
                    value: 'undefined'
                }
            },
            'form': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'asyncBlurFields': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string[]',
                    value: 'undefined'
                }
            },
            'asyncValidate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(values: any, dispatch: Dispatch<any>, props: any, blurredField: string) => Promise<any>',
                    value: 'undefined'
                }
            },
            'destroyOnUnmount': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'enableReinitialize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'forceUnregisterOnUnmount': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'getFormState': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(state: any) => FormStateMap',
                    value: 'undefined'
                }
            },
            'immutableProps': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string[]',
                    value: 'undefined'
                }
            },
            'initialValues': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Partial<any>',
                    value: 'undefined'
                }
            },
            'keepDirtyOnReinitialize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(values: Partial<any>, dispatch: Dispatch<any>, props: any) => void',
                    value: 'undefined'
                }
            },
            'propNamespace': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'pure': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'shouldValidate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(params: ValidateCallback<any, any>) => boolean',
                    value: 'undefined'
                }
            },
            'shouldAsyncValidate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(params: AsyncValidateCallback<any>) => boolean',
                    value: 'undefined'
                }
            },
            'touchOnBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'touchOnChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'persistentSubmitErrors': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'validate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(values: any, props: any) => FormErrors<any, void>',
                    value: 'undefined'
                }
            },
            'warn': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(values: any, props: any) => FormWarnings<any, void>',
                    value: 'undefined'
                }
            }
        }
    },
    'Cell': {
        displayName: 'Cell',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12',
                    value: 'undefined'
                }
            },
            'alignSelf': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'AlignSelf',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Grid': {
        displayName: 'Grid',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'wrap': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'alignItems': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'AlignItems',
                    value: 'undefined'
                }
            },
            'justifyContent': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'JustifyContent',
                    value: 'undefined'
                }
            },
            'direction': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Direction',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'PageContainer': {
        displayName: 'PageContainer',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Flow': {
        displayName: 'Flow',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'direction': {
                defaultValue: 'horizontal',
                description: ``,
                required: false,
                type: {
                    name: '"horizontal" | "vertical"',
                    value: 'undefined'
                }
            },
            'vSpacing': {
                defaultValue: '0',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'hSpacing': {
                defaultValue: '1',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Spacing': {
        displayName: 'Spacing',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'top': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'right': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'bottom': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'left': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'block': {
                defaultValue: 'false',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
}

export default propTypes
