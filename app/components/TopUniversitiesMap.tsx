"use client";

/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

type UniversityPin = {
  rank: string;
  name: string;
  state: string;
  lat: number;
  lon: number;
  metro?: string;
};

const universities: UniversityPin[] = [
  { rank: "1", name: "Princeton University", state: "NJ", lat: 40.343, lon: -74.651 },
  { rank: "2", name: "Massachusetts Institute of Technology", state: "MA", lat: 42.360, lon: -71.094, metro: "Boston-Cambridge" },
  { rank: "3", name: "Harvard University", state: "MA", lat: 42.374, lon: -71.116, metro: "Boston-Cambridge" },
  { rank: "4", name: "Stanford University", state: "CA", lat: 37.428, lon: -122.169, metro: "San Francisco Bay Area" },
  { rank: "4", name: "Yale University", state: "CT", lat: 41.316, lon: -72.922 },
  { rank: "6", name: "University of Chicago", state: "IL", lat: 41.789, lon: -87.600, metro: "Chicago" },
  { rank: "7", name: "Duke University", state: "NC", lat: 36.001, lon: -78.939, metro: "Research Triangle" },
  { rank: "7", name: "Johns Hopkins University", state: "MD", lat: 39.329, lon: -76.620 },
  { rank: "7", name: "Northwestern University", state: "IL", lat: 42.056, lon: -87.675, metro: "Chicago" },
  { rank: "7", name: "University of Pennsylvania", state: "PA", lat: 39.952, lon: -75.193 },
  { rank: "11", name: "California Institute of Technology", state: "CA", lat: 34.137, lon: -118.125, metro: "Los Angeles" },
  { rank: "12", name: "Cornell University", state: "NY", lat: 42.453, lon: -76.473 },
  { rank: "13", name: "Brown University", state: "RI", lat: 41.826, lon: -71.403 },
  { rank: "13", name: "Dartmouth College", state: "NH", lat: 43.704, lon: -72.288 },
  { rank: "15", name: "Columbia University", state: "NY", lat: 40.807, lon: -73.963, metro: "New York City" },
  { rank: "15", name: "University of California, Berkeley", state: "CA", lat: 37.871, lon: -122.259, metro: "San Francisco Bay Area" },
  { rank: "17", name: "Rice University", state: "TX", lat: 29.717, lon: -95.403 },
  { rank: "17", name: "University of California, Los Angeles", state: "CA", lat: 34.069, lon: -118.445, metro: "Los Angeles" },
  { rank: "17", name: "Vanderbilt University", state: "TN", lat: 36.145, lon: -86.802 },
  { rank: "20", name: "Carnegie Mellon University", state: "PA", lat: 40.443, lon: -79.943 },
  { rank: "20", name: "University of Michigan, Ann Arbor", state: "MI", lat: 42.278, lon: -83.738 },
  { rank: "20", name: "University of Notre Dame", state: "IN", lat: 41.703, lon: -86.238 },
  { rank: "20", name: "Washington University in St. Louis", state: "MO", lat: 38.648, lon: -90.305 },
  { rank: "24", name: "Emory University", state: "GA", lat: 33.792, lon: -84.324, metro: "Atlanta" },
  { rank: "24", name: "Georgetown University", state: "DC", lat: 38.907, lon: -77.073, metro: "Washington, DC" },
  { rank: "26", name: "University of North Carolina at Chapel Hill", state: "NC", lat: 35.904, lon: -79.047, metro: "Research Triangle" },
  { rank: "26", name: "University of Virginia", state: "VA", lat: 38.035, lon: -78.503 },
  { rank: "28", name: "University of Southern California", state: "CA", lat: 34.022, lon: -118.286, metro: "Los Angeles" },
  { rank: "29", name: "University of California, San Diego", state: "CA", lat: 32.880, lon: -117.234 },
  { rank: "30", name: "University of Florida", state: "FL", lat: 29.648, lon: -82.344 },
  { rank: "30", name: "The University of Texas at Austin", state: "TX", lat: 30.285, lon: -97.734 },
  { rank: "32", name: "Georgia Institute of Technology", state: "GA", lat: 33.776, lon: -84.398, metro: "Atlanta" },
  { rank: "32", name: "New York University", state: "NY", lat: 40.729, lon: -73.997, metro: "New York City" },
  { rank: "32", name: "University of California, Davis", state: "CA", lat: 38.539, lon: -121.753 },
  { rank: "32", name: "University of California, Irvine", state: "CA", lat: 33.640, lon: -117.844 },
  { rank: "36", name: "Boston College", state: "MA", lat: 42.335, lon: -71.168, metro: "Boston-Cambridge" },
  { rank: "36", name: "Tufts University", state: "MA", lat: 42.408, lon: -71.119, metro: "Boston-Cambridge" },
  { rank: "36", name: "University of Illinois Urbana-Champaign", state: "IL", lat: 40.102, lon: -88.227 },
  { rank: "36", name: "University of Wisconsin-Madison", state: "WI", lat: 43.076, lon: -89.412 },
  { rank: "40", name: "University of California, Santa Barbara", state: "CA", lat: 34.414, lon: -119.848 },
  { rank: "41", name: "The Ohio State University", state: "OH", lat: 40.007, lon: -83.030 },
  { rank: "42", name: "Boston University", state: "MA", lat: 42.350, lon: -71.105, metro: "Boston-Cambridge" },
  { rank: "42", name: "Rutgers University-New Brunswick", state: "NJ", lat: 40.500, lon: -74.447 },
  { rank: "42", name: "University of Maryland, College Park", state: "MD", lat: 38.986, lon: -76.943, metro: "Washington, DC" },
  { rank: "42", name: "University of Washington", state: "WA", lat: 47.655, lon: -122.303 },
  { rank: "46", name: "Lehigh University", state: "PA", lat: 40.607, lon: -75.379 },
  { rank: "46", name: "Northeastern University", state: "MA", lat: 42.340, lon: -71.089, metro: "Boston-Cambridge" },
  { rank: "46", name: "Purdue University", state: "IN", lat: 40.423, lon: -86.921 },
  { rank: "46", name: "University of Georgia", state: "GA", lat: 33.949, lon: -83.376, metro: "Atlanta" },
  { rank: "46", name: "University of Rochester", state: "NY", lat: 43.129, lon: -77.630 },
];

type MapCenter = {
  lat: number;
  lon: number;
};

type MapSize = {
  width: number;
  height: number;
};

type MapTile = {
  key: string;
  src: string;
  left: number;
  top: number;
};

type ProjectedSchool = UniversityPin & {
  x: number;
  y: number;
};

type SchoolCluster = {
  id: string;
  x: number;
  y: number;
  label?: string;
  members: ProjectedSchool[];
};

const tileSize = 256;
const minZoom = 4;
const maxZoom = 7;
const cityZoomStart = maxZoom;
const initialCenter = { lat: 38.7, lon: -96.4 };

const metroCenters: Record<string, MapCenter> = {
  "Atlanta": { lat: 33.749, lon: -84.388 },
  "Boston-Cambridge": { lat: 42.362, lon: -71.087 },
  "Chicago": { lat: 41.878, lon: -87.63 },
  "Los Angeles": { lat: 34.052, lon: -118.244 },
  "New York City": { lat: 40.713, lon: -74.006 },
  "Research Triangle": { lat: 35.914, lon: -79.057 },
  "San Francisco Bay Area": { lat: 37.775, lon: -122.419 },
  "Washington, DC": { lat: 38.907, lon: -77.037 },
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const normalizeTileX = (x: number, tilesPerSide: number) =>
  ((x % tilesPerSide) + tilesPerSide) % tilesPerSide;

const mercatorY = (lat: number) => {
  const radians = (lat * Math.PI) / 180;
  return Math.log(Math.tan(Math.PI / 4 + radians / 2));
};

const worldSize = (zoom: number) => tileSize * 2 ** zoom;

const lonToWorldX = (lon: number, zoom: number) =>
  ((lon + 180) / 360) * worldSize(zoom);

const latToWorldY = (lat: number, zoom: number) => {
  const y = (1 - mercatorY(lat) / Math.PI) / 2;

  return y * worldSize(zoom);
};

const worldXToLon = (x: number, zoom: number) =>
  (x / worldSize(zoom)) * 360 - 180;

const worldYToLat = (y: number, zoom: number) => {
  const n = Math.PI - (2 * Math.PI * y) / worldSize(zoom);

  return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
};

const projectCoordinate = (
  point: MapCenter,
  center: MapCenter,
  zoom: number,
  size: MapSize,
) => {
  const centerX = lonToWorldX(center.lon, zoom);
  const centerY = latToWorldY(center.lat, zoom);
  const pointX = lonToWorldX(point.lon, zoom);
  const pointY = latToWorldY(point.lat, zoom);

  return {
    x: size.width / 2 + pointX - centerX,
    y: size.height / 2 + pointY - centerY,
  };
};

const projectSchool = (
  school: UniversityPin,
  center: MapCenter,
  zoom: number,
  size: MapSize,
): ProjectedSchool => {
  const { x, y } = projectCoordinate(school, center, zoom, size);

  return {
    ...school,
    x,
    y,
  };
};

const getVisibleTiles = (
  center: MapCenter,
  zoom: number,
  size: MapSize,
): MapTile[] => {
  if (!size.width || !size.height) {
    return [];
  }

  const tilesPerSide = 2 ** zoom;
  const centerX = lonToWorldX(center.lon, zoom);
  const centerY = latToWorldY(center.lat, zoom);
  const viewportLeft = centerX - size.width / 2;
  const viewportTop = centerY - size.height / 2;
  const startX = Math.floor(viewportLeft / tileSize);
  const endX = Math.floor((viewportLeft + size.width) / tileSize);
  const startY = Math.floor(viewportTop / tileSize);
  const endY = Math.floor((viewportTop + size.height) / tileSize);
  const tiles: MapTile[] = [];

  for (let x = startX; x <= endX; x += 1) {
    for (let y = startY; y <= endY; y += 1) {
      if (y < 0 || y >= tilesPerSide) {
        continue;
      }

      const tileX = normalizeTileX(x, tilesPerSide);

      tiles.push({
        key: `${zoom}-${x}-${y}`,
        src: `https://tile.openstreetmap.org/${zoom}/${tileX}/${y}.png`,
        left: x * tileSize - viewportLeft,
        top: y * tileSize - viewportTop,
      });
    }
  }

  return tiles;
};

const rankNumber = (rank: string) => Number.parseInt(rank, 10);

const getTop15RankLabel = (schools: ProjectedSchool[]) => {
  const ranks = schools
    .map((school) => rankNumber(school.rank))
    .filter((rank) => rank <= 15)
    .sort((a, b) => a - b);
  const uniqueRanks = [...new Set(ranks)];
  const hasAdditionalSchools = schools.some(
    (school) => rankNumber(school.rank) > 15,
  );

  if (!uniqueRanks.length) {
    return undefined;
  }

  return `${uniqueRanks.join("&")}${hasAdditionalSchools ? "+" : ""}`;
};

const getClusterBestRank = (cluster: SchoolCluster) =>
  Math.min(...cluster.members.map((school) => rankNumber(school.rank)));

const getClusterCollisionRadius = (cluster: SchoolCluster, zoom: number) => {
  if (zoom < cityZoomStart) {
    if (cluster.members.length > 1) {
      if (zoom === minZoom) {
        return 34;
      }

      return zoom === 5 ? 28 : 22;
    }

    return zoom === minZoom ? 20 : 16;
  }

  if (cluster.label) {
    return zoom === maxZoom ? 44 : 58;
  }

  if (cluster.members.length > 1) {
    return zoom === maxZoom ? 38 : 50;
  }

  return zoom === maxZoom ? 24 : 34;
};

const mergeOverlappingClusters = (
  clusters: SchoolCluster[],
  zoom: number,
): SchoolCluster[] => {
  const mergedClusters: SchoolCluster[] = [];
  const rankedClusters = [...clusters].sort((a, b) => {
    const rankDifference = getClusterBestRank(a) - getClusterBestRank(b);

    if (rankDifference !== 0) {
      return rankDifference;
    }

    return b.members.length - a.members.length;
  });

  rankedClusters.forEach((cluster) => {
    const clusterRadius = getClusterCollisionRadius(cluster, zoom);
    const overlappingCluster = mergedClusters.find((mergedCluster) => {
      const mergedRadius = getClusterCollisionRadius(mergedCluster, zoom);
      const distance = Math.hypot(
        mergedCluster.x - cluster.x,
        mergedCluster.y - cluster.y,
      );

      return distance < clusterRadius + mergedRadius;
    });

    if (!overlappingCluster) {
      mergedClusters.push({ ...cluster, members: [...cluster.members] });
      return;
    }

    overlappingCluster.members = [
      ...overlappingCluster.members,
      ...cluster.members,
    ].sort((a, b) => rankNumber(a.rank) - rankNumber(b.rank));
    overlappingCluster.id = overlappingCluster.members
      .map((member) => member.name)
      .join("|");

    overlappingCluster.label = getTop15RankLabel(overlappingCluster.members);
  });

  return mergedClusters;
};

const getDistanceClusterRadius = (zoom: number) => {
  if (zoom === minZoom) {
    return 42;
  }

  return zoom === 5 ? 32 : 24;
};

const clusterSchoolsByDistance = (
  schools: ProjectedSchool[],
  zoom: number,
): SchoolCluster[] => {
  const clusters: SchoolCluster[] = [];
  const clusterRadius = getDistanceClusterRadius(zoom);

  schools.forEach((school) => {
    let closestClusterIndex = -1;
    let closestDistance = Number.POSITIVE_INFINITY;

    clusters.forEach((cluster, index) => {
      const distance = Math.hypot(cluster.x - school.x, cluster.y - school.y);

      if (distance < clusterRadius && distance < closestDistance) {
        closestClusterIndex = index;
        closestDistance = distance;
      }
    });

    if (closestClusterIndex === -1) {
      clusters.push({
        id: school.name,
        x: school.x,
        y: school.y,
        members: [school],
      });

      return;
    }

    const closestCluster = clusters[closestClusterIndex];
    const nextCount = closestCluster.members.length + 1;
    closestCluster.x =
      (closestCluster.x * closestCluster.members.length + school.x) / nextCount;
    closestCluster.y =
      (closestCluster.y * closestCluster.members.length + school.y) / nextCount;
    closestCluster.members.push(school);
    closestCluster.id = closestCluster.members.map((member) => member.name).join("|");
  });

  return clusters;
};

const clusterSchoolsByCity = (
  schools: ProjectedSchool[],
  center: MapCenter,
  zoom: number,
  size: MapSize,
): SchoolCluster[] => {
  const clusters: SchoolCluster[] = [];
  const schoolsByMetro = new Map<string, ProjectedSchool[]>();

  schools.forEach((school) => {
    if (!school.metro) {
      clusters.push({
        id: school.name,
        x: school.x,
        y: school.y,
        members: [school],
      });

      return;
    }

    const metroSchools = schoolsByMetro.get(school.metro) ?? [];
    metroSchools.push(school);
    schoolsByMetro.set(school.metro, metroSchools);
  });

  schoolsByMetro.forEach((members, metro) => {
    if (members.length === 1) {
      const [school] = members;
      clusters.push({
        id: school.name,
        x: school.x,
        y: school.y,
        members,
      });

      return;
    }

    const cityCenter = metroCenters[metro];
    const clusterPosition = cityCenter
      ? projectCoordinate(cityCenter, center, zoom, size)
      : {
          x:
            members.reduce((total, school) => total + school.x, 0) /
            members.length,
          y:
            members.reduce((total, school) => total + school.y, 0) /
            members.length,
        };

    clusters.push({
      id: metro,
      label: getTop15RankLabel(members),
      x: clusterPosition.x,
      y: clusterPosition.y,
      members,
    });
  });

  return clusters;
};

const clampCenter = (center: MapCenter): MapCenter => ({
  lat: clamp(center.lat, 24, 50),
  lon: clamp(center.lon, -126, -66),
});


export default function TopUniversitiesMap() {
  const { lang } = useLanguage();
  const mapRef = useRef<HTMLDivElement | null>(null);
  const dragStartRef = useRef<{
    center: MapCenter;
    pointerX: number;
    pointerY: number;
  } | null>(null);
  const [center, setCenter] = useState<MapCenter>(initialCenter);
  const [zoom, setZoom] = useState(minZoom);
  const [size, setSize] = useState<MapSize>({ width: 0, height: 0 });

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const mapElement = mapRef.current;
    const updateSize = () => {
      const rect = mapElement.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(mapElement);

    return () => resizeObserver.disconnect();
  }, []);

  const tiles = useMemo(
    () => getVisibleTiles(center, zoom, size),
    [center, size, zoom],
  );

  const clusters = useMemo(() => {
    if (!size.width || !size.height) {
      return [];
    }

    const projectedSchools = universities.map((school) =>
      projectSchool(school, center, zoom, size),
    );

    if (zoom < cityZoomStart) {
      return mergeOverlappingClusters(
        clusterSchoolsByDistance(projectedSchools, zoom),
        zoom,
      );
    }

    return mergeOverlappingClusters(
      clusterSchoolsByCity(projectedSchools, center, zoom, size),
      zoom,
    );
  }, [center, size, zoom]);

  const handleZoom = (direction: 1 | -1) => {
    setZoom((currentZoom) => clamp(currentZoom + direction, minZoom, maxZoom));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartRef.current = {
      center,
      pointerX: event.clientX,
      pointerY: event.clientY,
    };
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current) {
      return;
    }

    const deltaX = event.clientX - dragStartRef.current.pointerX;
    const deltaY = event.clientY - dragStartRef.current.pointerY;
    const startCenterX = lonToWorldX(dragStartRef.current.center.lon, zoom);
    const startCenterY = latToWorldY(dragStartRef.current.center.lat, zoom);
    const nextCenterX = startCenterX - deltaX;
    const nextCenterY = startCenterY - deltaY;

    setCenter(
      clampCenter({
        lat: worldYToLat(nextCenterY, zoom),
        lon: worldXToLon(nextCenterX, zoom),
      }),
    );
  };

  const handlePointerEnd = () => {
    dragStartRef.current = null;
  };

  return (
    <section className="surface-card reveal-up stagger-1 overflow-hidden rounded-2xl p-6 md:p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {lang === "zh" ? "美国前 50 大学地图" : "Top 50 U.S. Universities Map"}
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-700">
            {lang === "zh"
              ? "前三档缩放保持自然聚合，且逐级更精细；只有最精细一档切换到城市/都会区标签。重叠标签会合并，不会隐藏学校。"
              : "The first three zoom levels keep natural clustering and get progressively finer; only the finest zoom switches to city and metro labels. Overlapping labels merge instead of hiding schools."}
          </p>
        </div>
        <span className="w-fit rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
          {lang === "zh" ? "50 所学校" : "50 schools"}
        </span>
      </div>

      <div
        ref={mapRef}
        className="us-map mt-8"
        aria-label="Map of top 50 U.S. universities"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerEnd}
      >
        <div className="map-tile-layer" aria-hidden="true">
          {tiles.map((tile) => (
            <img
              key={tile.key}
              alt=""
              className="map-tile"
              draggable={false}
              src={tile.src}
              style={{
                left: `${tile.left}px`,
                top: `${tile.top}px`,
              }}
            />
          ))}
        </div>

        <div className="map-controls" onPointerDown={(event) => event.stopPropagation()}>
          <button
            type="button"
            aria-label={lang === "zh" ? "放大地图" : "Zoom in"}
            disabled={zoom === maxZoom}
            onClick={() => handleZoom(1)}
          >
            +
          </button>
          <button
            type="button"
            aria-label={lang === "zh" ? "缩小地图" : "Zoom out"}
            disabled={zoom === minZoom}
            onClick={() => handleZoom(-1)}
          >
            -
          </button>
        </div>

        {clusters.map((cluster, index) => {
          const isCluster = cluster.members.length > 1;
          const rankLabel = cluster.label ?? getTop15RankLabel(cluster.members);
          const hasRankLabel = Boolean(rankLabel);
          const label = isCluster
            ? rankLabel ?? cluster.members.length.toString()
            : cluster.members[0].rank;

          return (
          <span
            key={cluster.id}
            className={`map-pin ${isCluster ? "map-pin-cluster" : ""} ${
              hasRankLabel ? "map-pin-rank-list" : ""
            }`}
            style={
              {
                left: `${cluster.x}px`,
                top: `${cluster.y}px`,
                "--pin-delay": `${(index % 10) * 0.18}s`,
              } as CSSProperties
            }
            tabIndex={0}
            aria-label={cluster.members
              .map((school) => `${school.rank}. ${school.name} (${school.state})`)
              .join(", ")}
          >
            <span className="map-pin-dot">{label}</span>
            <span className="map-tooltip">
              {cluster.members.map((school) => (
                <span className="map-tooltip-item" key={school.name}>
                  <strong>#{school.rank}</strong> {school.name} ({school.state})
                </span>
              ))}
            </span>
          </span>
          );
        })}

        <span className="map-attribution">
          © OpenStreetMap contributors
        </span>
      </div>
    </section>
  );
}
