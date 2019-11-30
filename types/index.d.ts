export default Hello;
declare function Hello({ name }: {
    name: any;
}): any;
declare namespace Hello {
    export namespace propTypes {
        export const name: any;
    }
}
