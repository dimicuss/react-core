import compose from '@/lib/compose';
import createHoc from '@/lib/createHoc';

export default (...wrappers: Function[]) => (Wrapper: Function) =>  (props: object = {}): Function => {
    return compose(
        createHoc(Wrapper)(props),
        ...wrappers,
    );
}