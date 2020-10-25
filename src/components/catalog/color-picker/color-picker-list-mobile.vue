<template>
    <div>
        <div v-if="colorIsOpen === true && IS_MOBILE" class="picker-list-mobile-aria">
            <div class="centred-container">
                <div class="mobile-container">
                    <div class="mobile-rows">
                        <button class="btn-choose-color"  @click="selectedAll">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-8.486 8.485M7 17h.01" stroke="crimson" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
                                </button>
                        <button class="btn-choose-color"  @click="selectedRed">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="crimson"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                        <button class="btn-choose-color"  @click="selectedViolet">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="violet"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg>
                        </button>
                    </div>
                    <div class="mobile-rows">
                        <button class="btn-choose-color"  @click="selectedPurple">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="purple"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                        <button class="btn-choose-color"  @click="selectedMediumPurple">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="mediumpurple"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                        <button class="btn-choose-color"  @click="selectedBlue">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="royalblue"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                    </div>
                    <div class="mobile-rows">
                        <button class="btn-choose-color"  @click="selectedLightSeaGreen">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="lightgreen"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                        <button class="btn-choose-color"  @click="selectedForestGreen">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="forestgreen"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                        <button class="btn-choose-color"  @click="selectedYellowGreen">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="yellowgreen"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                    </div>
                    <div class="mobile-rows">
                        <button class="btn-choose-color"  @click="selectedYellow">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="yellow"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                        <button class="btn-choose-color"  @click="selectedOrangeRed">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="orangered"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                        <button class="btn-choose-color"  @click="selectedOrange">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="orange"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                    </div>
                    <div class="mobile-rows">
                        <button class="btn-choose-color"  @click="selectedSaddleBrown">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="saddlebrown"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                        <button class="btn-choose-color"  @click="selectedBlack">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="black"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                        <button class="btn-choose-color"  @click="selectedGray">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="gray"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                    </div>
                    <div class="mobile-rows">
                        <button class="btn-choose-color"  @click="selectedWhite">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M61.598 16.767C57.86 9.318 55.339 5.168 54.104 4.433c-.977-.578-2.666-.74-5.817-.999c-2.359-.193-5.293-.434-6.608-.949L40.439 2l-.858 1.022c-.065.075-3.171 3.627-7.58 3.627c-4.437 0-7.554-3.591-7.585-3.628l-.863-1.011l-1.233.476c-1.315.516-4.248.756-6.606.948c-3.152.259-4.842.421-5.816.998c-1.239.736-3.76 4.886-7.496 12.335l-.402.8l.352.825c3.3 7.753 11.082 9.458 11.412 9.527l1.032.215l-1.054 28.042l-.043 1.152l.983.575c9.328 5.461 25.305 5.461 34.634 0l.983-.575l-.044-1.152l-1.054-28.042l1.032-.215c.33-.069 8.112-1.774 11.413-9.527l.354-.825l-.402-.8m-5.034 2.923c-2.139 2.742-4.77 4.259-7.835 4.523l-1.651-2.618l1.303 34.653c-9.059 5.303-23.703 5.304-32.763 0l1.302-34.653l-1.594 2.555c-3.063-.264-5.696-1.783-7.832-4.522a17.513 17.513 0 0 1-2.347-4.089l-.063.12c1.627-3.139 4.748-8.978 5.759-9.579c1.231-.73 7.502-.688 10.964-1.476a20.106 20.106 0 0 0 3.043 2.54a15.67 15.67 0 0 0 3.251 1.685c1.385.514 2.776.774 4.144.774h.04c1.655-.008 3.28-.395 4.832-1.155c1.713-.838 3.354-2.146 4.89-3.882c3.422.829 9.896.771 11.149 1.514c1.007.6 4.112 6.402 5.744 9.549a17.381 17.381 0 0 1-2.336 4.061" fill="black"/><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
                        <button class="btn-choose-color"  @click="closeColorList()">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200"><path d="M669.727 273.516c-22.891-2.476-46.15-3.895-69.727-4.248c-103.025.457-209.823 25.517-310.913 73.536c-75.058 37.122-148.173 89.529-211.67 154.174C46.232 529.978 6.431 577.76 0 628.74c.76 44.162 48.153 98.67 77.417 131.764c59.543 62.106 130.754 113.013 211.67 154.174c2.75 1.335 5.51 2.654 8.276 3.955l-75.072 131.102l102.005 60.286l551.416-960.033l-98.186-60.008l-107.799 183.536zm232.836 65.479l-74.927 129.857c34.47 44.782 54.932 100.006 54.932 159.888c0 149.257-126.522 270.264-282.642 270.264c-6.749 0-13.29-.728-19.922-1.172l-49.585 85.84c22.868 2.449 45.99 4.233 69.58 4.541c103.123-.463 209.861-25.812 310.84-73.535c75.058-37.122 148.246-89.529 211.743-154.174c31.186-32.999 70.985-80.782 77.417-131.764c-.76-44.161-48.153-98.669-77.417-131.763c-59.543-62.106-130.827-113.013-211.743-154.175c-2.731-1.324-5.527-2.515-8.276-3.807zm-302.636 19.483c6.846 0 13.638.274 20.361.732l-58.081 100.561c-81.514 16.526-142.676 85.88-142.676 168.897c0 20.854 3.841 40.819 10.913 59.325c.008.021-.008.053 0 .074l-58.228 100.854c-34.551-44.823-54.932-100.229-54.932-160.182c.001-149.255 126.524-270.262 282.643-270.261zm168.969 212.035L638.013 797.271c81.076-16.837 141.797-85.875 141.797-168.603c0-20.474-4.086-39.939-10.914-58.155z" fill="#626262"/><rect x="0" y="0" width="1200" height="1200" fill="rgba(0, 0, 0, 0)" /></svg>
                        </button>
                    </div>

                </div>
            </div>

        </div>
        <div class="с-color-picker-mobile">
            <div v-if="colorIsOpen === false" @click="openColorList()" class="picker">
                <svg class="picker-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path d="M32.23 14.89c-2.1-.56-4.93 1.8-6.34.3c-1.71-1.82 2.27-5.53 1.86-8.92c-.33-2.78-3.51-4.08-6.66-4.1A18.5 18.5 0 0 0 7.74 7.59c-6.64 6.59-8.07 16-1.37 22.48c6.21 6 16.61 4.23 22.67-1.4a17.73 17.73 0 0 0 4.22-6.54c1.08-2.9 1.18-6.64-1.03-7.24zM9.4 10.57a2.23 2.23 0 0 1 2.87 1.21a2.22 2.22 0 0 1-1.81 2.53a2.22 2.22 0 0 1-2.87-1.21a2.23 2.23 0 0 1 1.81-2.53zM5.07 20.82a2.22 2.22 0 0 1 1.82-2.53a2.22 2.22 0 0 1 2.86 1.21A2.23 2.23 0 0 1 7.94 22a2.24 2.24 0 0 1-2.87-1.18zm7 8.33a2.22 2.22 0 0 1-2.87-1.21a2.23 2.23 0 0 1 1.8-2.53a2.23 2.23 0 0 1 2.87 1.21A2.22 2.22 0 0 1 12 29.15zM15 8.26a2.23 2.23 0 0 1 1.81-2.53a2.24 2.24 0 0 1 2.87 1.21a2.22 2.22 0 0 1-1.82 2.53A2.21 2.21 0 0 1 15 8.26zm5.82 22.19a2.22 2.22 0 0 1-2.87-1.21a2.23 2.23 0 0 1 1.81-2.53a2.24 2.24 0 0 1 2.87 1.21a2.22 2.22 0 0 1-1.85 2.53zm5-10.46a3.2 3.2 0 0 1-1.69 1.76a3.53 3.53 0 0 1-1.4.3a2.78 2.78 0 0 1-2.56-1.5a2.49 2.49 0 0 1-.07-2a3.2 3.2 0 0 1 1.69-1.76a3 3 0 0 1 4 1.2a2.54 2.54 0 0 1 0 2.01z" data-name="Layer 3" fill="crimson"/><rect x="0" y="0" width="36" height="36" fill="rgba(0, 0, 0, 0)" /></svg>
            </div>
        </div>
    </div>
</template>

<script>
    import {colorPicker} from "../../../mixins/catalog/color-picker-mixin";
    import {colorPickerScreen} from "../../../mixins/catalog/color-picker-screen";
    import {mapGetters} from "vuex";

    export default {
        name: "color-picker-list-mobile",
        data() {
            return {
                colorIsOpen: true,
            }
        },
        mixins: [colorPicker, colorPickerScreen],
        computed: {
            ...mapGetters([
                "IS_DESKTOP",
                "IS_TABLET",
                "IS_MOBILE"
            ]),

        },
    }
</script>

<style lang="scss">
    @import "src/assets/styles/styles";
    .picker-list-mobile-aria{
        .centred-container{
            width: 100%;
            height: 15vh;
            display: flex;
            justify-content: center;
            align-items: center;
            .mobile-container{
                padding: 1em;
                margin: 0;
                position: fixed;
                z-index: 10;
                display: grid;
                justify-content: center;
                align-content: center;
                grid-gap: 1rem;
                transition: ease-in-out 1s ;
                box-shadow: 0 0 4px 0 gray;
                border: gray solid 3px;
                border-radius: 5px 10px 15px 30px/30px 15px 10px 5px;
                background-color: #f9f9f9;
                .mobile-rows{
                    display: flex;
                    justify-content: center;
                    text-align: center;

                }
                .btn-choose-color{
                    padding: .5rem;
                    margin: .5rem;
                    background-color: #fff;
                    opacity: 1;
                    border: gray solid 3px;
                    border-radius: 5px 10px 15px 30px/30px 15px 10px 5px;
                    svg{
                        width: 2rem;
                        height: 2rem;
                    }
                }
                .btn-choose-color:hover{
                    border: crimson solid 3px;
                    border-radius: 5px 10px 15px 30px/30px 15px 10px 5px;
                }
            }
        }


    }
</style>