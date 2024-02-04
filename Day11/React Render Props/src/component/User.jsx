// export default function User({ name }) {
//     return name;
// }
// export default function User({ name }) {
//     return name();
// }
export default function User({ render }) {
    return render(true);
}
