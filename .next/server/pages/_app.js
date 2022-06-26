"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @type {import('next-seo').DefaultSeoProps} */ const defaultSEOConfig = {
    title: "PropertyMataaz",
    titleTemplate: "%s | Admin",
    defaultTitle: "PropertyMataaz",
    description: "Save",
    canonical: "https://PropertyMataaz.com",
    openGraph: {
        url: "https://PropertyMataaz.com",
        title: "Liquede",
        description: "Save",
        images: [
            {
                url: "/assets/fav.png",
                alt: "PropertyMataaz"
            }, 
        ],
        site_name: "Liquede"
    },
    twitter: {
        handle: "@sozonome",
        cardType: "summary_large_image"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultSEOConfig);


/***/ }),

/***/ 6227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ UserContext),
/* harmony export */   "d": () => (/* binding */ UserProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const UserProvider = ({ children  })=>{
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: admin , 1: setAdmin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            user,
            setUser,
            admin,
            setAdmin
        },
        children: children
    });
};


/***/ }),

/***/ 5418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var react_openapi_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9677);
/* harmony import */ var react_openapi_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_openapi_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5927);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utilities_PrimaryInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4589);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__]);
([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const schema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
    existingPassword: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(),
    newPassword: yup__WEBPACK_IMPORTED_MODULE_4__.string().required()
});
function UpdateUserModal({ isOpen , onClose  }) {
    const [UpdatePassword, { loading , data: data1 , error  }] = (0,react_openapi_client__WEBPACK_IMPORTED_MODULE_7__.useOperationMethod)("Userpasswordupdate");
    const { register , handleSubmit , watch , formState: { errors , isValid  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(schema),
        mode: "all"
    });
    const { addToast  } = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__.useToasts)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: passwordType , 1: setPasswordType  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    const { 0: showPassword , 1: setShowPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    const changePasswordType = ()=>{
        setPasswordType(!passwordType);
    };
    const changePasswordField = ()=>{
        setShowPassword(!showPassword);
    };
    const { 0: err , 1: setErr  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const onSubmit = async (data)=>{
        if (data.existingPassword == data.newPassword) {
            setErr("Old password & New Password are the same");
            setTimeout(()=>{
                setErr("");
            }, 2000);
            return;
        }
        try {
            const result = await (await UpdatePassword(undefined, data)).data;
            console.log({
                result
            });
            if (result.status) {
                onClose();
                addToast("Password succesfully changed", {
                    appearance: "success",
                    autoDismiss: true
                });
                window.location.href = "/login";
                return;
            }
            addToast(result.message, {
                appearance: "error",
                autoDismiss: true
            });
            return;
        } catch (err) {}
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        isOpen: isOpen,
        onClose: onClose,
        motionPreset: "slideInBottom",
        isCentered: true,
        size: "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {
                bg: "blackAlpha.300",
                backdropFilter: "blur(10px) "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
                py: 5,
                borderRadius: "0",
                pos: "fixed",
                maxH: "100vh",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            px: 5,
                            h: [
                                "100vh",
                                "auto"
                            ],
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleSubmit(onSubmit),
                                style: {
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utilities_PrimaryInput__WEBPACK_IMPORTED_MODULE_9__/* .PrimaryInput */ .i, {
                                        label: "Old Password",
                                        name: "existingPassword",
                                        error: errors.existingPassword,
                                        defaultValue: "",
                                        register: register,
                                        changePasswordType: changePasswordType,
                                        type: passwordType ? "password" : "text",
                                        iconClass: passwordType ? "fa-eye" : "fa-eye-slash"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Utilities_PrimaryInput__WEBPACK_IMPORTED_MODULE_9__/* .PrimaryInput */ .i, {
                                        label: "New Password",
                                        name: "newPassword",
                                        defaultValue: "",
                                        register: register,
                                        error: errors.newPassword,
                                        changePasswordType: changePasswordField,
                                        type: showPassword ? "password" : "text",
                                        iconClass: showPassword ? "fa-eye" : "fa-eye-slash"
                                    }),
                                    err && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        color: "red",
                                        fontSize: ".8rem",
                                        textAlign: "center",
                                        mt: "1rem",
                                        children: err
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        w: "full",
                                        height: "3rem",
                                        mt: "2rem",
                                        borderRadius: "0",
                                        disabled: !isValid,
                                        isLoading: loading,
                                        children: "Update Password"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateUserModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ listenForOutsideClicks)
/* harmony export */ });
function listenForOutsideClicks(listening, setListening, searchRef, setIsSearchOpen) {
    return ()=>{
        if (listening) return;
        if (!searchRef.current) return;
        setListening(true);
        [
            `click`,
            `touchstart`
        ].forEach((type)=>{
            document.addEventListener(`click`, (evt)=>{
                const cur = searchRef.current;
                const node = evt.target;
                if (cur && cur.contains(node)) return;
                setIsSearchOpen(false);
            });
        });
    };
};


/***/ }),

/***/ 5982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



function Footer() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "full",
        bgColor: "brand.200",
        display: router.pathname.startsWith("/admin") ? "none" : "block",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            bgColor: "black",
            w: "full",
            py: "4rem",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                w: "80%",
                mx: "auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        templateColumns: "repeat(3, 1fr)",
                        rowGap: "2rem",
                        mb: "2.5rem",
                        display: [
                            "grid",
                            "flex"
                        ],
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                    align: "flex-start",
                                    spacing: [
                                        3,
                                        5
                                    ],
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "brand.300",
                                            fontSize: [
                                                "1rem",
                                                "18px"
                                            ],
                                            fontWeight: "semibold",
                                            children: "Liquede"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "CSR"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                    align: "flex-start",
                                    spacing: [
                                        3,
                                        5
                                    ],
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "brand.300",
                                            fontSize: [
                                                "1rem",
                                                "18px"
                                            ],
                                            fontWeight: "semibold",
                                            children: "Liquede"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "CSR"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                    align: "flex-start",
                                    spacing: [
                                        3,
                                        5
                                    ],
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "brand.300",
                                            fontSize: [
                                                "1rem",
                                                "18px"
                                            ],
                                            fontWeight: "semibold",
                                            children: "Liquede"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "CSR"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                    align: "flex-start",
                                    spacing: [
                                        3,
                                        5
                                    ],
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "brand.300",
                                            fontSize: [
                                                "1rem",
                                                "18px"
                                            ],
                                            fontWeight: "semibold",
                                            children: "Liquede"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "CSR"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                    align: "flex-start",
                                    spacing: [
                                        3,
                                        5
                                    ],
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "brand.300",
                                            fontSize: [
                                                "1rem",
                                                "18px"
                                            ],
                                            fontWeight: "semibold",
                                            children: "Liquede"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "Careers"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            color: "white",
                                            fontSize: [
                                                "14px",
                                                "16px"
                                            ],
                                            fontWeight: "400",
                                            children: "CSR"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        borderColor: "brand.300"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: [
                            "11px",
                            "14px",
                            "18px"
                        ],
                        color: "white",
                        my: "1.2rem",
                        children: "Liquede is a product of Liquede Limited, a subsidiary of Oxygen Holdings. Banking services on Liquede are provided by Bank Limited, which is registered with the Central Bank of Nigeria. Payments on Liquede are made via Interswitch; a PCI DSS certified payment platform with bank-level security to ensure your transactions and financial information are kept safe at all times."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        borderColor: "brand.300"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: [
                            ".8rem",
                            "1rem"
                        ],
                        color: "white",
                        mt: "2.5rem",
                        children: "\xa9 2020 Liquede Limited. All rights reserved."
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 3000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function Header() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        w: "full",
        bgColor: "black",
        display: router.pathname.startsWith("/admin") ? "none" : "block",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            maxW: [
                "full",
                "90%"
            ],
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                justify: "space-between",
                alignItems: "center",
                h: "6rem",
                zIndex: "5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        cursor: "pointer",
                        w: [
                            "95px",
                            "126px"
                        ],
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                src: "/assets/logo.png",
                                w: "full",
                                h: "auto"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            color: "black",
                            bgColor: "#E3BC6A",
                            w: "10rem",
                            fontWeight: "bold",
                            children: "Get Liquede"
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 9592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_SideNav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/lib/components/Utils/AdminMenu.tsx




function AdminMenu({ text , url , icon  }) {
    const router = (0,router_.useRouter)();
    const getNavLinks = (style)=>{
        if (router.asPath.startsWith(url)) return `${style}`;
    };
    return(// <Box display="inline">
    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: url,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            align: "center",
            p: ".5rem 0 .5rem 2rem",
            fontWeight: getNavLinks("brand.100") ? "bold" : "500",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    color: getNavLinks("brand.100") ? "brand.300" : "white",
                    w: "3rem",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: `fal ${icon}`
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    w: "fit-content",
                    overflow: "hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "1rem",
                        // color={getNavLinks("brand.100") ? "brand.300" : "white"}
                        color: "white",
                        // backgroundColor={getNavLinks("rgba(223, 248, 249, 1)")}
                        w: "100%",
                        cursor: "pointer",
                        _hover: {
                            color: "brand.200",
                            textDecoration: "unset"
                        },
                        _focus: {
                            boxShadow: "0"
                        },
                        children: text
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const Utils_AdminMenu = (AdminMenu);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/lib/layout/SideNav.tsx





function SideNav() {
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const openModal = ()=>{
        setIsOpen(true);
    };
    const closeModal = ()=>{
        setIsOpen(false);
    };
    const { 0: opened , 1: setOpened  } = (0,external_react_.useState)(true);
    const openMobileMenu = ()=>{
        setOpened(!opened);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        w: [
            "80%",
            "16%"
        ],
        pos: "fixed",
        h: "full",
        bgColor: "brand.100",
        zIndex: "6",
        borderRadius: "8px 4px 22px rgba(0, 0, 0, 0.2)",
        transition: "all .3s ease-in-out",
        left: [
            opened ? "-100%" : "0",
            "unset"
        ],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                w: "148px",
                ml: "2rem",
                my: "2rem",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                    src: "/assets/logo.png",
                    w: "auto"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Circle, {
                size: "1.5rem",
                top: "10%",
                bg: "black",
                pos: "absolute",
                right: opened ? "-34%" : "-3.5%",
                onClick: ()=>openMobileMenu()
                ,
                display: [
                    "flex",
                    "none"
                ],
                justifyContent: "center",
                zIndex: "7",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                    as: fi_.FiChevronRight,
                    color: "white"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                align: "flex-start",
                onClick: ()=>openMobileMenu()
                ,
                spacing: 4,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Utils_AdminMenu, {
                        text: "Dashboard",
                        url: "/admin/dashboard",
                        icon: "fa-analytics"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Utils_AdminMenu, {
                        text: "Users",
                        url: "/admin/users",
                        icon: "fa-users"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Utils_AdminMenu, {
                        text: "Transactions",
                        url: "/admin/transactions",
                        icon: "fa-history"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Utils_AdminMenu, {
                        text: "Listings",
                        url: "/admin/listings",
                        icon: "fa-building"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Utils_AdminMenu, {
                        text: "Cleaning",
                        url: "/admin/cleaning",
                        icon: "fa-vacuum"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Utils_AdminMenu, {
                        text: "Rent",
                        url: "/admin/rent",
                        icon: "fa-house-user"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Utils_AdminMenu, {
                        text: "Rent Relief",
                        url: "/admin/relief",
                        icon: "fa-percentage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Utils_AdminMenu, {
                        text: "Complaints",
                        url: "/admin/complaints",
                        icon: "fa-unlink"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Utils_AdminMenu, {
                        text: "Admin",
                        url: "/admin/admin",
                        icon: "fa-cog"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const layout_SideNav = (SideNav);


/***/ }),

/***/ 8505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TopNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var lib_components_Modals_UpdateUserModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5418);
/* harmony import */ var lib_components_Utils_listenForOutsideClick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2660);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, lib_components_Modals_UpdateUserModal__WEBPACK_IMPORTED_MODULE_3__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_2__, lib_components_Modals_UpdateUserModal__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function TopNav() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: isMenuOpened , 1: setIsMenuOpened  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const LogUserOut = ()=>{
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("user");
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("token");
        js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove("userIn");
        window.location.href = "/";
    };
    const users = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("user");
    let user;
    if (users !== undefined) {
        user = JSON.parse(users);
    }
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const dropDown = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const { 0: listening , 1: setListening  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)((0,lib_components_Utils_listenForOutsideClick__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(listening, setListening, dropDown, setIsMenuOpened));
    const changePassword = ()=>{
        setIsOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        align: "center",
        h: "4.5rem",
        bg: "white",
        w: "full",
        px: 7,
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontSize: "22px",
                fontWeight: "bold",
                textTransform: "capitalize",
                children: router.pathname.replace("/admin/", "").split("/")[0]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                pos: "relative",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        align: "center",
                        ref: dropDown,
                        onClick: ()=>setIsMenuOpened((prev)=>!prev
                            )
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontWeight: "600",
                                fontSize: "1rem",
                                pr: ".8rem",
                                children: `Hi, ${user ? user === null || user === void 0 ? void 0 : user.firstName : "Pade"}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Circle, {
                                size: "50px",
                                overflow: "hidden",
                                bg: "gray",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    src: (user === null || user === void 0 ? void 0 : user.profilePicture) || "/assets/image1.png",
                                    w: "full",
                                    h: "full",
                                    objectFit: "cover"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                as: react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowDown,
                                ml: ".8rem"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                        bg: "white",
                        align: "start",
                        p: [
                            "2",
                            "5"
                        ],
                        mt: [
                            "0",
                            "0"
                        ],
                        w: "fit-content",
                        zIndex: 50,
                        shadow: [
                            "none",
                            "md"
                        ],
                        position: [
                            "relative",
                            "absolute"
                        ],
                        display: isMenuOpened ? "flex" : "none",
                        transition: "all .5s ease",
                        overflow: "hidden",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                cursor: "pointer",
                                onClick: ()=>changePassword()
                                ,
                                w: "full",
                                _hover: {
                                    color: "brand.100"
                                },
                                children: "Change Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                w: "full",
                                cursor: "pointer",
                                _hover: {
                                    color: "brand.100"
                                },
                                onClick: ()=>LogUserOut()
                                ,
                                children: "Logout"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_components_Modals_UpdateUserModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                onClose: ()=>setIsOpen(false)
                ,
                isOpen: isOpen
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_components_Utils_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9956);
/* harmony import */ var lib_Utils_MainContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6227);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5982);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3000);
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9592);
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_components_Utils_Login__WEBPACK_IMPORTED_MODULE_2__, _TopNav__WEBPACK_IMPORTED_MODULE_9__]);
([lib_components_Utils_Login__WEBPACK_IMPORTED_MODULE_2__, _TopNav__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Layout = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { admin , setAdmin  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(lib_Utils_MainContext__WEBPACK_IMPORTED_MODULE_3__/* .UserContext */ .S);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: router.pathname.startsWith("/admin/") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: !admin === null || !admin === undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_components_Utils_Login__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                pos: "relative",
                minH: "100vh",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SideNav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        w: [
                            "full",
                            "84%"
                        ],
                        h: "full",
                        bg: "#f4f8fb",
                        as: "main",
                        ml: "auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopNav__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                as: "div",
                                w: "95%",
                                mx: "auto",
                                minH: "80vh",
                                mt: "1rem",
                                mb: "3rem",
                                children: children
                            })
                        ]
                    })
                ]
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    as: "main",
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ styles_customTheme)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./src/lib/styles/customTheme/colors.ts
/** extend additional color here */ const extendedColors = {
    brand: {
        100: "#0042ff",
        200: "white",
        300: "#2FDF84",
        400: "rgba(5, 156, 159, 0.36)",
        500: "#000000",
        600: "#323232",
        700: "#DFF8F9",
        800: "#F5FDFE",
        900: "#0D73FF"
    }
};
/** override chakra colors here */ const overridenChakraColors = {};
const colors = {
    ...overridenChakraColors,
    ...extendedColors
};
/* harmony default export */ const customTheme_colors = (colors);

;// CONCATENATED MODULE: ./src/lib/styles/customTheme/components/button.ts
const Button = {
    baseStyle: {
        borderRadius: "5px"
    },
    variants: {
        outline: {
            backgroundColor: "transparent",
            border: "1px solid #E3BC6A",
            color: "#E3BC6A",
            width: "11rem",
            height: "3.12rem",
            _hover: {
                backgroundColor: "brand.100",
                color: "white",
                transition: "all .5s ease"
            },
            _focus: {
                boxShadow: "0"
            }
        },
        solid: {
            backgroundColor: "brand.100",
            color: "white",
            width: "18rem",
            height: "2.4rem",
            fontSize: "1rem",
            fontWeight: "bold",
            _hover: {
                backgroundColor: "brand.600",
                transition: "all .5s ease",
                color: "white"
            },
            _focus: {
                boxShadow: "0"
            }
        }
    }
};
/* harmony default export */ const components_button = (Button);

;// CONCATENATED MODULE: ./src/lib/styles/customTheme/fonts.ts
const fonts = {
    body: '"Baloo Bhai 2", cursive',
    heading: '"Baloo Bhai 2", cursive'
};
/* harmony default export */ const customTheme_fonts = (fonts);

;// CONCATENATED MODULE: ./src/lib/styles/customTheme/components/input.ts
const Input = {
    variants: {
        outline: {
            field: {
                borderRadius: "0",
                background: "white",
                boxSizing: "border-box",
                height: "3rem",
                borderColor: "#DCE1E7",
                border: "1px solid",
                // boxShadow: "0px 0px 9px rgba(0, 127, 130, 0.37)",
                _focus: {
                    borderColor: "brand.200",
                    border: "1px solid"
                },
                _placeholder: {
                    fontSize: ".8rem"
                }
            }
        },
        filled: {
            field: {
                // borderRadius: "5px",
                background: "white",
                boxSizing: "border-box",
                height: "3rem",
                border: "1px solid black",
                color: "brand.100",
                _focus: {
                    borderColor: "brand.200",
                    border: "1px solid",
                    background: "rgba(0, 127, 130, 0.2)"
                },
                _placeholder: {
                    fontSize: "1rem",
                    color: "brand.500"
                }
            }
        }
    }
};
/* harmony default export */ const input = (Input);

;// CONCATENATED MODULE: ./src/lib/styles/customTheme/components/textarea.ts
const Textarea = {
    variants: {
        outline: {
            field: {
                borderRadius: "5px",
                background: "white",
                boxSizing: "border-box",
                height: "4rem",
                borderColor: "brand.100",
                border: "1px solid",
                boxShadow: "0px 0px 9px rgba(0, 127, 130, 0.37)",
                _focus: {
                    borderColor: "brand.200",
                    border: "1px solid"
                },
                _placeholder: {
                    fontSize: ".8rem"
                }
            }
        },
        filled: {
            field: {
                borderRadius: "5px",
                background: "rgba(0, 127, 130, 0.2)",
                boxSizing: "border-box",
                height: "4rem",
                border: "none",
                _focus: {
                    borderColor: "brand.200",
                    border: "1px solid",
                    background: "rgba(0, 127, 130, 0.2)"
                },
                _placeholder: {
                    fontSize: ".8rem"
                }
            }
        }
    }
};
/* harmony default export */ const components_textarea = (Textarea);

;// CONCATENATED MODULE: ./src/lib/styles/customTheme/index.ts






const customTheme = (0,react_.extendTheme)({
    fonts: customTheme_fonts,
    colors: customTheme_colors,
    components: {
        Button: components_button,
        Input: input,
        Textarea: components_textarea
    }
});
/* harmony default export */ const styles_customTheme = (customTheme);


/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_openapi_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9677);
/* harmony import */ var react_openapi_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_openapi_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_styles_customTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9422);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(666);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5927);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lib_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5636);
/* harmony import */ var lib_Utils_MainContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6227);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_layout__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_10__]);
([lib_layout__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable react/jsx-props-no-spreading */ 










const MyApp = ({ Component , pageProps  })=>{
    let headers;
    headers = {
        cor: "no-cors"
    };
    if (false) {}
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: _lib_styles_customTheme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_openapi_client__WEBPACK_IMPORTED_MODULE_4__.OpenAPIProvider, {
            definition: "/api-schema.json",
            axiosConfigDefaults: {
                withCredentials: true,
                headers,
                baseURL: "https://propertymataazbe.herokuapp.com"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "viewport",
                            content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: "/assets/fav.png",
                            type: "image/x-icon"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, {
                    ..._next_seo_config__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_Utils_MainContext__WEBPACK_IMPORTED_MODULE_9__/* .UserProvider */ .d, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_7__.ToastProvider, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lib_layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8941:
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 9677:
/***/ ((module) => {

module.exports = require("react-openapi-client");

/***/ }),

/***/ 5927:
/***/ ((module) => {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664,4589,2400], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();