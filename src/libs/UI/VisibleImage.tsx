import React, { memo, useEffect, useMemo, useState } from "react";
import { Image, ImageStyle, StyleProp } from "react-native";
type TProps = {
  style?: StyleProp<ImageStyle> | null;
  source: string;
  defaultImage?: any;
};
const VisibleImage = memo(
  ({ style = null, source, defaultImage = null }: TProps) => {
    const [err, setErr] = useState(null);
    // const defaultImageComp = useMemo(() => defaultImage, [defaultImage]);

    useEffect(() => {
      return () => {
        setErr(null);
      };
    }, [source]);
    return (
      <>
        {!err && source ? (
          <Image
            style={style}
            source={{ uri: source }}
            onLoad={({
              nativeEvent: {
                source: { width, height },
              },
            }) => (width == 1 && height == 1 ? setErr(true) : "")}
            onError={() => {
              setErr(true);
            }}
          />
        ) : (
          <>{defaultImage}</>
        )}
      </>
    );
  }
);

export default VisibleImage;
