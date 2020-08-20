<template>
    <div class="c-color-picker">
        <div class="select-color-button-aria">

            <button class="btn-choose-color"  @click="selectedRed">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="crimson"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedViolet">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="violet"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedPurple">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="purple"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedMediumPurple">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="mediumpurple"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedBlue">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="royalblue"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedLightSeaGreen">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="lightgreen"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedForestGreen">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="forestgreen"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedYellowGreen">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="yellowgreen"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedYellow">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="yellow"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedOrangeRed">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="orangered"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedOrange">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="orange"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedSaddleBrown">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="saddlebrown"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedBlack">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="black"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedGray">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M63.7 16.1S57.6 4.1 56 3.2c-1.6-.9-10.5-.7-13.8-2c0 0-4.1 4.8-10.2 4.8S21.8 1.2 21.8 1.2C18.4 2.5 9.6 2.3 8 3.2S.2 16.1.2 16.1c3.4 7.7 11.4 9.4 11.4 9.4l3.2-5l-1.5 38.7C21 63.7 26.6 64 32 64c5.4 0 10.9-.3 18.6-4.7l-1.5-38.7l3.2 5c0-.1 8.1-1.7 11.4-9.5" fill="gray"/><g fill="#fff"><path d="M32.2 7.2c-1.6 0-3.1-.3-4.7-.9c-1.2-.5-2.5-1.1-3.7-1.9c-2-1.3-3.3-2.7-3.3-2.7L22.4.2l-.9.7l.9-.7s1.1 1.2 2.9 2.4c1.6 1 4.1 2.3 6.9 2.3c3.2 0 6.3-1.7 9.2-4.9l1.9 1.5c-1.8 2-3.6 3.5-5.6 4.4c-1.7.8-3.5 1.3-5.5 1.3"/><path d="M13 23.4c-3.5-.3-6.5-2-8.9-5.1c-1.4-1.8-2.3-3.6-2.7-4.6L0 16.5c.5 1 1.2 2.1 2.1 3.2c1.4 1.8 3 3.2 4.7 4.2c1.5.9 3.1 1.5 4.9 1.7l1.3-2.2"/><path d="M51 23.5c3.5-.3 6.5-2 8.9-5.1c1.4-1.8 2.3-3.6 2.7-4.6l1.4 2.7c-.5 1-1.2 2.1-2.1 3.2c-1.4 1.8-3 3.2-4.7 4.2c-1.5.9-3.2 1.5-4.9 1.7L51 23.5"/></g><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>
            <button class="btn-choose-color"  @click="selectedWhite">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path d="M61.598 16.767C57.86 9.318 55.339 5.168 54.104 4.433c-.977-.578-2.666-.74-5.817-.999c-2.359-.193-5.293-.434-6.608-.949L40.439 2l-.858 1.022c-.065.075-3.171 3.627-7.58 3.627c-4.437 0-7.554-3.591-7.585-3.628l-.863-1.011l-1.233.476c-1.315.516-4.248.756-6.606.948c-3.152.259-4.842.421-5.816.998c-1.239.736-3.76 4.886-7.496 12.335l-.402.8l.352.825c3.3 7.753 11.082 9.458 11.412 9.527l1.032.215l-1.054 28.042l-.043 1.152l.983.575c9.328 5.461 25.305 5.461 34.634 0l.983-.575l-.044-1.152l-1.054-28.042l1.032-.215c.33-.069 8.112-1.774 11.413-9.527l.354-.825l-.402-.8m-5.034 2.923c-2.139 2.742-4.77 4.259-7.835 4.523l-1.651-2.618l1.303 34.653c-9.059 5.303-23.703 5.304-32.763 0l1.302-34.653l-1.594 2.555c-3.063-.264-5.696-1.783-7.832-4.522a17.513 17.513 0 0 1-2.347-4.089l-.063.12c1.627-3.139 4.748-8.978 5.759-9.579c1.231-.73 7.502-.688 10.964-1.476a20.106 20.106 0 0 0 3.043 2.54a15.67 15.67 0 0 0 3.251 1.685c1.385.514 2.776.774 4.144.774h.04c1.655-.008 3.28-.395 4.832-1.155c1.713-.838 3.354-2.146 4.89-3.882c3.422.829 9.896.771 11.149 1.514c1.007.6 4.112 6.402 5.744 9.549a17.381 17.381 0 0 1-2.336 4.061" fill="black"/><rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" /></svg></button>


            <!--            <button class="btn-choose-color"  @click="selectedAll">Все {{ sortedSubCategoryNameRus }} этого цвета</button>-->
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../../event-bus/event-bus";

    export default {
        name: "c-color-picker",
        data() {
            return {

            }
        },
        methods:{
            selectedRed: function () {

                EventBus.$emit('selectedRed', this.selectedRed = 'red')
            },
            selectedViolet: function () {

                EventBus.$emit('selectedViolet', this.selectedViolet = 'violet')
            },
            selectedPurple: function () {

                EventBus.$emit('selectedPurple', this.selectedPurple = 'purple')
            },
            selectedMediumPurple: function () {

                EventBus.$emit('selectedMediumPurple', this.selectedMediumPurple = 'mediumpurple')
            },
            selectedBlue: function () {

                EventBus.$emit('selectedBlue', this.selectedBlue = 'royalblue')
            },
            selectedLightSeaGreen: function () {

                EventBus.$emit('selectedLightSeaGreen', this.selectedLightSeaGreen = 'lightgreen')
            },
            selectedForestGreen: function () {

                EventBus.$emit('selectedForestGreen', this.selectedForestGreen = 'forestgreen')
            },
            selectedYellowGreen: function () {

                EventBus.$emit('selectedYellowGreen', this.selectedYellowGreen = 'yellowgreen')
            },
            selectedYellow: function () {

                EventBus.$emit('selectedYellow', this.selectedYellow = 'yellow')
            },
            selectedOrangeRed: function () {

                EventBus.$emit('selectedOrangeRed', this.selectedOrangeRed = 'orangered')
            },
            selectedOrange: function () {

                EventBus.$emit('selectedOrange', this.selectedOrange = 'orange')
            },
            selectedSaddleBrown: function () {

                EventBus.$emit('selectedSaddleBrown', this.selectedSaddleBrown = 'saddlebrown')
            },
            selectedBlack: function () {

                EventBus.$emit('selectedBlack', this.selectedBlack = 'black')
            },
            selectedGray: function () {

                EventBus.$emit('selectedGray', this.selectedGray = 'gray')
            },
            selectedWhite: function () {

                EventBus.$emit('selectedWhite', this.selectedWhite = 'white')
            },
        },

    }
</script>

<style lang="scss">
    .select-color-button-aria{
        padding: 1rem;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-choose-color{
            margin: 5px;
            height: 35px;
            background-color: #fff;
            border: gray solid 1px;
            border-radius: 5px;
        }
        .btn-choose-color:hover{
            border: $mark solid 2px;
        }
    }
</style>